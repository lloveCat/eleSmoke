function Address(name, phone, city,county, province, detail) {
  this.name = name;
  this.phone = phone;
  this.city = city;
  this.county = county;
  this.province = province;
  this.detail = detail;
  this.equals = function(otherAddress) {
    if(this.name === otherAddress.name && this.phone === otherAddress.phone && this.city === otherAddress.city && this.province === otherAddress.province &&  this.county === otherAddress.county && this.detail === otherAddress.detail) return true
    else return false
  },
  this.checkEmpty = function() {
    if(this.name.length === 0 || this.phone.length === 0 || this.county.length === 0 || this.detail.length === 0) return true
    else return false
  },
  this.checkIfExist = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (this.equals(arr[i])) {
        return true
      }
    }
    return false
  }
}

module.exports = Address