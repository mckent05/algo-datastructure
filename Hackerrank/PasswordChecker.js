const passWordChecker = (passwords, loginAttempt) => {
   let m = passCheck(passwords, loginAttempt, 0, "", [])
   return m.join("")
}
const passCheck = (passwords, loginAtt, j, result, p) => {
    if(loginAtt.length < 1 || j >= loginAtt.length) {
        return p
    }
       result += loginAtt[j]
       if(passwords.includes(result)) {
        p.push(result)
        result = ""
       return passCheck(passwords, loginAtt.slice(j+1, loginAtt.length), 0, result, p)
       } else {
        return passCheck(passwords, loginAtt, j + 1, result, p)
       }
       
}
console.log(passWordChecker(["the", "cake", "is", "a", "lie", "thec", "ak", "editor", "sal", "ie"], "thecakeisaliethecakeisalieakthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieathecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethethecakeisaliethecakeisaliethecakeisaliethecakeisaliethethecakeisalieakthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliesalthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliesalthecakeisaliethecakeisalielieakthecakeisalieliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieakthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieeithecakeisaliethecakeisalieeithecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieiethecakeisaliethecakeisaliethecakeisaliethecakeisalieisthecakeisaliethecakeisalieiscakeakthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieakcakethecakeisaliethecieiethecthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieeithecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieathecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieeithecakeisaliethecakeisaliethecakeisaliethecakeisalieacakethecakeisaliethecakeisaliesalthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalieakthecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisaliethecakeisalie"))