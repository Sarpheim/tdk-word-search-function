module.exports = async (src) => {
  const fetch = require("node-fetch")
  
  return await fetch(`https://sozluk.gov.tr/gts?ara=${encodeURI(src.toLowerCase())}`).then((response) => response.json())
}
