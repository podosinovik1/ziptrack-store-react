const catalogFlat = [
  { "manufacturer": "CHALLENGER", "model": "Challenger MT 801", "size": "762X152.4X66AM", "price": null },
  { "manufacturer": "CHALLENGER", "model": "Challenger MT 801", "size": "915X152.4X66AM", "price": null },

  { "manufacturer": "CHALLENGER", "model": "Challenger MT 700", "size": "635X152.4X58AM", "price": null },
  { "manufacturer": "CHALLENGER", "model": "Challenger MT 700", "size": "762X152.4X58AM", "price": null },

  { "manufacturer": "CHALLENGER", "model": "Challenger 65/75/85/95", "size": "635X152.4X57", "price": null },
  { "manufacturer": "CHALLENGER", "model": "Challenger 65/75/85/95", "size": "762X152.4X57", "price": null },

  { "manufacturer": "CHALLENGER", "model": "Challenger 35/45/55", "size": "457X152.4X53CC", "price": null },
  { "manufacturer": "CHALLENGER", "model": "Challenger 35/45/55", "size": "635X152.4X53CC", "price": null },
  { "manufacturer": "CHALLENGER", "model": "Challenger 35/45/55", "size": "762X152.4X53CC", "price": null },

  { "manufacturer": "JOHN DEERE", "model": "8000T Series", "size": "635X152.4X54", "price": null },
  { "manufacturer": "JOHN DEERE", "model": "8000T Series", "size": "762X152.4X54", "price": null },

  { "manufacturer": "JOHN DEERE", "model": "8 RT Series", "size": "635X152.4X59", "price": null },
  { "manufacturer": "JOHN DEERE", "model": "8 RT Series", "size": "762X152.4X59", "price": null },

  { "manufacturer": "JOHN DEERE", "model": "9000T Series", "size": "762x152.4x63", "price": null },
  { "manufacturer": "JOHN DEERE", "model": "9000T Series", "size": "915X152.4X63", "price": null },

  { "manufacturer": "JOHN DEERE", "model": "9 RT Series", "size": "762x152.4x65", "price": null },
  { "manufacturer": "JOHN DEERE", "model": "9 RT Series", "size": "915X152.4X65", "price": null },

  { "manufacturer": "CASE IH / CNH", "model": "QUADTRAC / CASE IH - 400-600", "size": "762x152.4x42", "price": null },
  { "manufacturer": "CASE IH / CNH", "model": "QUADTRAC / CASE IH - 400-600", "size": "915X152.4X42", "price": null },

  { "manufacturer": "CASE IH / CNH", "model": "CNH - 9300 Series", "size": "762x152.4x39", "price": null },
  { "manufacturer": "CASE IH / CNH", "model": "CNH - 9300 Series", "size": "915X152.4X39", "price": null },

  { "manufacturer": "CASE IH / CNH", "model": "CASE STEIGER / MAGNUM ROWTRAC, NEW HOLLAND T8 SMART TRAX - CNH", "size": "635x152.4x44", "price": null },
  { "manufacturer": "CASE IH / CNH", "model": "CASE STEIGER / MAGNUM ROWTRAC, NEW HOLLAND T8 SMART TRAX - CNH", "size": "762X152.4X44", "price": null }
]


const catalog = {
  "manufacturers": [
    {
      "name": "CHALLENGER",
      "models": [
        {
          "name": "Challenger MT 801",
          "sizes": [
            { "size": "762X152.4X66AM", "price": null },
            { "size": "915X152.4X66AM", "price": null }
          ]
        },
        {
          "name": "Challenger MT 700",
          "sizes": [
            { "size": "635X152.4X58AM", "price": null },
            { "size": "762X152.4X58AM", "price": null }
          ]
        },
        {
          "name": "Challenger 65/75/85/95",
          "sizes": [
            { "size": "635X152.4X57", "price": null },
            { "size": "762X152.4X57", "price": null }
          ]
        },
        {
          "name": "Challenger 35/45/55",
          "sizes": [
            { "size": "457X152.4X53CC", "price": null },
            { "size": "635X152.4X53CC", "price": null },
            { "size": "762X152.4X53CC", "price": null }
          ]
        }
      ]
    },
    {
      "name": "JOHN DEERE",
      "models": [
        {
          "name": "8000T Series",
          "sizes": [
            { "size": "635X152.4X54", "price": null },
            { "size": "762X152.4X54", "price": null }
          ]
        },
        {
          "name": "8 RT Series",
          "sizes": [
            { "size": "635X152.4X59", "price": null },
            { "size": "762X152.4X59", "price": null }
          ]
        },
        {
          "name": "9000T Series",
          "sizes": [
            { "size": "762x152.4x63", "price": null },
            { "size": "915X152.4X63", "price": null }
          ]
        },
        {
          "name": "9 RT Series",
          "sizes": [
            { "size": "762x152.4x65", "price": null },
            { "size": "915X152.4X65", "price": null }
          ]
        }
      ]
    },
    {
      "name": "CASE IH / CNH",
      "models": [
        {
          "name": "QUADTRAC / CASE IH - 400-600",
          "sizes": [
            { "size": "762x152.4x42", "price": null },
            { "size": "915X152.4X42", "price": null }
          ]
        },
        {
          "name": "CNH - 9300 Series",
          "sizes": [
            { "size": "762x152.4x39", "price": null },
            { "size": "915X152.4X39", "price": null }
          ]
        },
        {
          "name": "CASE STEIGER / MAGNUM ROWTRAC, NEW HOLLAND T8 SMART TRAX - CNH",
          "sizes": [
            { "size": "635x152.4x44", "price": null },
            { "size": "762X152.4X44", "price": null }
          ]
        }
      ]
    }
  ]
}

export {catalog, catalogFlat}