module.exports = async (fetch, src) => {
  return await fetch(`https://sozluk.gov.tr/gts?ara=${encodeURI(src.toLowerCase())}`).then((response) => response.json())
}