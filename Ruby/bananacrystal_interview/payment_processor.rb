require "csv"
require "pry"
require "time"
require "fileutils"

class CardProcessor
  def initialize(card_number, ccv, owner_name, expiration_date, zip_code, amount, card_type)
    @card_number = card_number
    @ccv = ccv
    @owner_name = owner_name
    @expiration_date =  expiration_date
    @zip_code = zip_code
    @amount = amount
    @card_type = card_type
  end

  attr_accessor :amount

  def card_expired?
    month,year = @expiration_date.split("/").map(&:to_i)

    return true if Time.now.year > year.to_i
    if Time.now.year == year
      Time.now.month >= month
    else
      false
    end
  end

  def processed_cards
    {card_type: @card_type, amount: @amount}
  end

  # In this exercise we can assume that if everything is otherwise valid the
  # payment will process successfully
  def process!
    { amount: @amount, status: true }
  end
end

class PaymentProcessor
  def self.process(input)
    @input = input

    @processed_cards = []
    
    @all_proccessed_cards = []

    cards_to_try.each do |card|
      processor = CardProcessor.new(
        card[1], card[2], card[0], card[4], card[3], card[5], card[6]
      )
      @all_proccessed_cards << processor.processed_cards
      next if processor.card_expired?
      @processed_cards << processor.process!
    end
    report
  end

  def self.report
    "Total payments: #{total_payments}, \n Total Amount Processed: #{processed_amount}, \n Amount Grouped by card Type: #{grouped_cards_amount}"
    # "Total amount processed: #{processed_amount}"
  end

  def self.cards_to_try
    @input[1..-1]
  end

  def self.total_payments
    @processed_cards.count { |card| card[:status] == true }
  end

  def self.processed_amount
    @processed_cards.sum { |card| card[:amount].to_f}
  end

  def self.group_processed_cards
    @all_proccessed_cards.group_by { |card| card[:card_type]}
  end

  def self.grouped_cards_amount
    group_processed_cards.each_with_object({}) do |(card_type, cards), result|
      total_sum = cards.sum { |card| card[:amount].to_i }
      result[card_type] = total_sum
    end
  end
end

file_path = File.expand_path("./inputs.csv", File.dirname(__FILE__))
timestamp = Time.now.strftime("%Y-%m-%d_%H-%M-%S")
new_file_path = File.join(File.dirname(file_path), "#{timestamp}_payments.csv")
unless File.exist?(new_file_path)
  FileUtils.cp(file_path, new_file_path)
end

puts "Report => #{PaymentProcessor.process CSV.read(file_path)}"
