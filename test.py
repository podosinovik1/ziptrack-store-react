catalog = [
  { "manufacturer": "CHALLENGER", "model": "Challenger MT 801", "size": "762X152.4X66AM", "price": None },
  { "manufacturer": "CHALLENGER", "model": "Challenger MT 801", "size": "915X152.4X66AM", "price": None },

  { "manufacturer": "CHALLENGER", "model": "Challenger MT 700", "size": "635X152.4X58AM", "price": None },
  { "manufacturer": "CHALLENGER", "model": "Challenger MT 700", "size": "762X152.4X58AM", "price": None },

  { "manufacturer": "CHALLENGER", "model": "Challenger 65/75/85/95", "size": "635X152.4X57", "price": None },
  { "manufacturer": "CHALLENGER", "model": "Challenger 65/75/85/95", "size": "762X152.4X57", "price": None },

  { "manufacturer": "CHALLENGER", "model": "Challenger 35/45/55", "size": "457X152.4X53CC", "price": None },
  { "manufacturer": "CHALLENGER", "model": "Challenger 35/45/55", "size": "635X152.4X53CC", "price": None },
  { "manufacturer": "CHALLENGER", "model": "Challenger 35/45/55", "size": "762X152.4X53CC", "price": None },

  { "manufacturer": "JOHN DEERE", "model": "8000T Series", "size": "635X152.4X54", "price": None },
  { "manufacturer": "JOHN DEERE", "model": "8000T Series", "size": "762X152.4X54", "price": None },

  { "manufacturer": "JOHN DEERE", "model": "8 RT Series", "size": "635X152.4X59", "price": None },
  { "manufacturer": "JOHN DEERE", "model": "8 RT Series", "size": "762X152.4X59", "price": None },

  { "manufacturer": "JOHN DEERE", "model": "9000T Series", "size": "762x152.4x63", "price": None },
  { "manufacturer": "JOHN DEERE", "model": "9000T Series", "size": "915X152.4X63", "price": None },

  { "manufacturer": "JOHN DEERE", "model": "9 RT Series", "size": "762x152.4x65", "price": None },
  { "manufacturer": "JOHN DEERE", "model": "9 RT Series", "size": "915X152.4X65", "price": None },

  { "manufacturer": "CASE IH / CNH", "model": "QUADTRAC / CASE IH - 400-600", "size": "762x152.4x42", "price": None },
  { "manufacturer": "CASE IH / CNH", "model": "QUADTRAC / CASE IH - 400-600", "size": "915X152.4X42", "price": None },

  { "manufacturer": "CASE IH / CNH", "model": "CNH - 9300 Series", "size": "762x152.4x39", "price": None },
  { "manufacturer": "CASE IH / CNH", "model": "CNH - 9300 Series", "size": "915X152.4X39", "price": None },

  { "manufacturer": "CASE IH / CNH", "model": "CASE STEIGER / MAGNUM ROWTRAC, NEW HOLLAND T8 SMART TRAX - CNH", "size": "635x152.4x44", "price": None },
  { "manufacturer": "CASE IH / CNH", "model": "CASE STEIGER / MAGNUM ROWTRAC, NEW HOLLAND T8 SMART TRAX - CNH", "size": "762X152.4X44", "price": None }
]

filters = { 
    "manufacturer": ["CHALLENGER", ], 
    "model": ["Challenger MT 801", ], 
    "size": ["762X152.4X66AM", ], 
    }

f = list(filters.keys())

res = []

for p in catalog:
    if (
        p[f[0]] in filters[f[0]] and p[f[1]] in filters[f[1]] and p[f[2]] in filters[f[2]]
    ): res.append(p)

print(res)