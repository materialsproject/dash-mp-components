import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
import os

app = dash.Dash(__name__)
app.layout = html.Div([
  dash_mp_components.BibFilter(
    bibEntries=[
      {
          "DOI": "10.1557/mrc.2016.29",
          "title": [
            "Frontiers in strain-engineered multifunctional ferroic materials"
          ],
          "author": [
            {
              "given": "Joshua C.",
              "family": "Agar",
              "sequence": "first",
              "affiliation": []
            },
            {
              "given": "Shishir",
              "family": "Pandya",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Ruijuan",
              "family": "Xu",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Ajay K.",
              "family": "Yadav",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Zhiqi",
              "family": "Liu",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Thomas",
              "family": "Angsten",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Sahar",
              "family": "Saremi",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Mark",
              "family": "Asta",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "R.",
              "family": "Ramesh",
              "sequence": "additional",
              "affiliation": []
            },
            {
              "given": "Lane W.",
              "family": "Martin",
              "sequence": "additional",
              "affiliation": []
            }
          ],
          "created": {
            "date-parts": [
              [
                2016,
                8,
                18
              ]
            ],
            "date-time": "2016-08-18T10:25:31Z",
            "timestamp": 1471515931000
          },
          "publisher": "Springer Science and Business Media LLC",
          "openAccessUrl": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/95E71B1B18C06C02A60359A580051DA3/S215968591600029Xa.pdf/div-class-title-frontiers-in-strain-engineered-multifunctional-ferroic-materials-div.pdf"
        }
      # {
      #   "journal": "Physical Review X",
      #   "year": "2015",
      #   "issn": "21603308",
      #   "isbn": "2160-3308",
      #   "doi": "10.1103/PhysRevX.5.011006",
      #   "author": ["Agapito, Luis A.", "Curtarolo, Stefano", "Nardelli, Marco Buongiorno"],
      #   "title": "Reformulation of DFT + U as a Pseudohybrid Hubbard Density Functional for Accelerated Materials Discovery",
      #   "ENTRYTYPE": "article",
      #   "openAccessUrl": "https://lbl.gov",
      #   "ID": "agapito2015"
      # },
      # {
      #   "journal": "Physical Review B",
      #   "year": "2017",
      #   "issn": "24699969",
      #   "doi": "10.1103/PhysRevB.95.174110",
      #   "author": ["Angsten, Thomas", "Martin, Lane W.", "Asta, Mark"],
      #   "title": "Orientation-Dependent Properties of Epitaxially Strained Perovskite Oxide Thin Films: Insights from First-Principles Calculations",
      #   "ENTRYTYPE": "article",
      #   "ID": "angsten2017"
      # }
    ],
    format="crossref",
    sortField="year",
    ascending=False,
    className="bibjson-test",
    resultClassName="bibjson-test-result"
  )
])
  
if __name__ == '__main__':
  app.run_server(debug=True)