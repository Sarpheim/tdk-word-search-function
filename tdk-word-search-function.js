module.exports = async (value) => {
  const got = require("got")
  
  return got(`https://sozluk.gov.tr/gts?ara=${encodeURI(value)}`).then((response) => console.log(JSON.parse(response.body)))
}
