# tdk-word-search-function
TDK (Türk Dil Kurumu) word search function.

---

## Usage
```javascript
const TDKWordSearchFunction = require("./tdk-word-search-function.js")
const word = "nazım"
// "word" value can be everything you want.

console.log(TDKWordSearchFunction(fetch, word))
```

---

## Result
### If there is an error
```javascriptobjectnotation
{
  error: 'Sonuç bulunamadı'
}
```
### If there is not an error
```javascriptobjectnotation
[
  {
    madde_id: '53350',
    kac: '0',
    kelime_no: '37969',
    cesit: '0',
    anlam_gor: '0',
    on_taki: null,
    madde: 'nazım',
    cesit_say: '0',
    anlam_say: '1',
    taki: 'zmı',
    cogul_mu: '0',
    ozel_mi: '0',
    lisan_kodu: '11',
    lisan: 'Arapça naẓm',
    telaffuz: null,
    birlesikler: 'nazım birimi, nazım türü, nazmetmek, serbest nazım',
    font: null,
    madde_duz: 'nazim',
    gosterim_tarihi: '2021-04-23',
    anlamlarListe: [ [Object] ]
  },
  {
    madde_id: '53351',
    kac: '0',
    kelime_no: '37971',
    cesit: '0',
    anlam_gor: '0',
    on_taki: null,
    madde: 'nâzım',
    cesit_say: '0',
    anlam_say: '2',
    taki: null,
    cogul_mu: '0',
    ozel_mi: '0',
    lisan_kodu: '11',
    lisan: 'Arapça nāẓim',
    telaffuz: 'na:zım',
    birlesikler: 'nâzım plan',
    font: null,
    madde_duz: 'nâzim',
    gosterim_tarihi: '2021-04-16',
    anlamlarListe: [ [Object], [Object] ]
  }
]
```
