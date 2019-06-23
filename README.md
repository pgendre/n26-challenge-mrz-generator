## MRZ Generator

The module allows to create a MRZ (Machine Readable Zone) of type TD1 and TD3.</br>
For more information, check the following page: </br>
https://en.wikipedia.org/wiki/Machine-readable_passport

### Installation

Last version:

```
npm install --save https://github.com/pgendre/n26-challenge-mrz-generator.git
```

The **x.y.z** version:

```
npm install --save https://github.com/pgendre/n26-challenge-mrz-generator.git#x.y.z
```

### Basic usage

```
import { generateMrz } from 'mrz-generator'

const inputData = {
  passport: {
    mrzType: 'td1',
    type: 'p',
    issuingCountry: 'FRA',
    number: '11av56868',
    expirationDate: '11 May 2021 00:00:00 GMT',

  },
  user: {
    surname: 'Gendre',
    givenNames: 'Pierre Joseh Alexandre',
    nationality: 'FRA',
    dateOfBirth: '17 Oct 1986 00:12:00 GMT',
    sex: 'male'
  }
}

const basicTest => {
  try {
    const mrz = generateMrz(inputData)
    console.log(mrz)
    // > 'P<FRA11AV568680<<<<<<<<<<<<<<<\n8610175M2105116FRA<<<<<<<<<<<<\nGENDRE<<PIERRE<JOSEH<ALEXANDRE'
  } catch (e) {
    console.error(e)
  }
}
```

### API Specification

Format of input data:

| 1 level key | 2 level key    | Required | Format           | Description                               | Example           |
| ----------- | -------------- | -------- | ---------------- | ----------------------------------------- | ----------------- |
| passport    | mrzType        | Yes      | 'td1' or 'td3'   | Type of mrz.                              | 'td1'             |
|             | type           | Yes      | AlphaNum(1)      | Type of passport.                         | 'i'               |
|             | typePrecision  | No       | AlphaNum(1)      | Precise the type of passport.             | 'd'               |
|             | issuingCountry | Yes      | Country ISO \*   | Document issuing country.                 | 'ALB'             |
|             | number         | Yes      | AlphaNum(9)      | Document number.                          | 'AD98FR334'       |
|             | expirationDate | Yes      | Stringified Date | Format is free. Document expiration date. | '2023-06-24'      |
|             | optionalField1 | No       | AlphaNum(-)      | Optional field.                           | '54 option32'     |
|             | optionalField2 | No       | AlphaNum(-)      | Optional field (only available for TD1).  | 'other 98'        |
| user        | surname        | Yes      | AlphaNum(-)\*\*  | User surname.                             | 'Willson Mark'    |
|             | givenNames     | Yes      | AlphaNum(-)\*\*  | User given names.                         | 'John Max Steven' |
|             | nationality    | Yes      | Country ISO \*   | User nationality.                         | 'BEL'             |
|             | dateOfBirth    | Yes      | Stringified Date | User date of birth.                       | '1988-03-15'      |
|             | sex            | Yes      | 'male'or'female' | User sex.                                 | 'female'          |
|             |                |          | or'unspecified'  |

\* : See the list below to get correct country code.
\*\* : Are allowed hyphens, spaces and apostrophes.

### Countries format

ABW Aruba
AFG Afghanistan
AGO Angola
AIA Anguilla
ALA Åland Islands
ALB Albania
AND Andorra
ARE United Arab Emirates
ARG Argentina
ARM Armenia
ASM American Samoa
ATA Antarctica
ATF French Southern Territories
ATG Antigua and Barbuda
AUS Australia
AUT Austria
AZE Azerbaijan
BDI Burundi
BEL Belgium
BEN Benin
BES Bonaire, Sint Eustatius and Saba
BFA Burkina Faso
BGD Bangladesh
BGR Bulgaria
BHR Bahrain
BHS Bahamas
BIH Bosnia and Herzegovina
BLM Saint Barthélemy
BLR Belarus
BLZ Belize
BMU Bermuda
BOL Bolivia (Plurinational State of)
BRA Brazil
BRB Barbados
BRN Brunei Darussalam
BTN Bhutan
BVT Bouvet Island
BWA Botswana
CAF Central African Republic
CAN Canada
CCK Cocos (Keeling) Islands
CHE Switzerland
CHL Chile
CHN China
CIV Côte d'Ivoire
CMR Cameroon
COD Congo, Democratic Republic of the
COG Congo
COK Cook Islands
COL Colombia
COM Comoros
CPV Cabo Verde
CRI Costa Rica
CUB Cuba
CUW Curaçao
CXR Christmas Island
CYM Cayman Islands
CYP Cyprus
CZE Czechia
DEU Germany
DJI Djibouti
DMA Dominica
DNK Denmark
DOM Dominican Republic
DZA Algeria
ECU Ecuador
EGY Egypt
ERI Eritrea
ESH Western Sahara
ESP Spain
EST Estonia
ETH Ethiopia
FIN Finland
FJI Fiji
FLK Falkland Islands (Malvinas)
FRA France
FRO Faroe Islands
FSM Micronesia (Federated States of)
GAB Gabon
GBR United Kingdom of Great Britain and Northern Ireland
GEO Georgia
GGY Guernsey
GHA Ghana
GIB Gibraltar
GIN Guinea
GLP Guadeloupe
GMB Gambia
GNB Guinea-Bissau
GNQ Equatorial Guinea
GRC Greece
GRD Grenada
GRL Greenland
GTM Guatemala
GUF French Guiana
GUM Guam
GUY Guyana
HKG Hong Kong
HMD Heard Island and McDonald Islands
HND Honduras
HRV Croatia
HTI Haiti
HUN Hungary
IDN Indonesia
IMN Isle of Man
IND India
IOT British Indian Ocean Territory
IRL Ireland
IRN Iran (Islamic Republic of)
IRQ Iraq
ISL Iceland
ISR Israel
ITA Italy
JAM Jamaica
JEY Jersey
JOR Jordan
JPN Japan
KAZ Kazakhstan
KEN Kenya
KGZ Kyrgyzstan
KHM Cambodia
KIR Kiribati
KNA Saint Kitts and Nevis
KOR Korea, Republic of
KWT Kuwait
LAO Lao People's Democratic Republic
LBN Lebanon
LBR Liberia
LBY Libya
LCA Saint Lucia
LIE Liechtenstein
LKA Sri Lanka
LSO Lesotho
LTU Lithuania
LUX Luxembourg
LVA Latvia
MAC Macao
MAF Saint Martin (French part)
MAR Morocco
MCO Monaco
MDA Moldova, Republic of
MDG Madagascar
MDV Maldives
MEX Mexico
MHL Marshall Islands
MKD North Macedonia
MLI Mali
MLT Malta
MMR Myanmar
MNE Montenegro
MNG Mongolia
MNP Northern Mariana Islands
MOZ Mozambique
MRT Mauritania
MSR Montserrat
MTQ Martinique
MUS Mauritius
MWI Malawi
MYS Malaysia
MYT Mayotte
NAM Namibia
NCL New Caledonia
NER Niger
NFK Norfolk Island
NGA Nigeria
NIC Nicaragua
NIU Niue
NLD Netherlands
NOR Norway
NPL Nepal
NRU Nauru
NZL New Zealand
OMN Oman
PAK Pakistan
PAN Panama
PCN Pitcairn
PER Peru
PHL Philippines
PLW Palau
PNG Papua New Guinea
POL Poland
PRI Puerto Rico
PRK Korea (Democratic People's Republic of)
PRT Portugal
PRY Paraguay
PSE Palestine, State of
PYF French Polynesia
QAT Qatar
REU Réunion
ROU Romania
RUS Russian Federation
RWA Rwanda
SAU Saudi Arabia
SDN Sudan
SEN Senegal
SGP Singapore
SGS South Georgia and the South Sandwich Islands
SHN Saint Helena, Ascension and Tristan da Cunha
SJM Svalbard and Jan Mayen
SLB Solomon Islands
SLE Sierra Leone
SLV El Salvador
SMR San Marino
SOM Somalia
SPM Saint Pierre and Miquelon
SRB Serbia
SSD South Sudan
STP Sao Tome and Principe
SUR Suriname
SVK Slovakia
SVN Slovenia
SWE Sweden
SWZ Eswatini
SXM Sint Maarten (Dutch part)
SYC Seychelles
SYR Syrian Arab Republic
TCA Turks and Caicos Islands
TCD Chad
TGO Togo
THA Thailand
TJK Tajikistan
TKL Tokelau
TKM Turkmenistan
TLS Timor-Leste
TON Tonga
TTO Trinidad and Tobago
TUN Tunisia
TUR Turkey
TUV Tuvalu
TWN Taiwan, Province of China
TZA Tanzania, United Republic of
UGA Uganda
UKR Ukraine
UMI United States Minor Outlying Islands
URY Uruguay
USA United States of America
UZB Uzbekistan
VAT Holy See
VCT Saint Vincent and the Grenadines
VEN Venezuela (Bolivarian Republic of)
VGB Virgin Islands (British)
VIR Virgin Islands (U.S.)
VNM Viet Nam
VUT Vanuatu
WLF Wallis and Futuna
WSM Samoa
YEM Yemen
ZAF South Africa
ZMB Zambia
ZWE Zimbabwe
