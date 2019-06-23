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

### N26 challenge

To get a concrete example, run tests :

```
npm test
```

The MRZ of type TD3 should be displayed in your console. </br>
The verification can be done with the picture located in the following directory: </br>

```
./passport_picture
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
    // > 'P<FRA11AV568680<<<<<<<<<<<<<<<\n8610175M2105116FRA<<<<<<<<<<<<\nGENDRE<<PIERRE<JOSEPH<ALEXANDR'
  } catch (e) {
    console.error(e)
  }
}
```

### API Specification

Format of input data: </br>

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
| user        | surname        | Yes      | Alpha(-)\*\*     | User surname.                             | 'Willson Mark'    |
|             | givenNames     | Yes      | Alpha(-)\*\*     | User given names.                         | 'John Max Steven' |
|             | nationality    | Yes      | Country ISO \*   | User nationality.                         | 'BEL'             |
|             | dateOfBirth    | Yes      | Stringified Date | User date of birth.                       | '1988-03-15'      |
|             | sex            | Yes      | 'male'or'female' | User sex.                                 | 'female'          |
|             |                |          | or'unspecified'  |

\* : See the list below to get correct country code.
\*\* : Are allowed hyphens, spaces and apostrophes.

### Countries format

ABW Aruba
</br>AFG Afghanistan
</br>AGO Angola
</br>AIA Anguilla
</br>ALA Åland Islands
</br>ALB Albania
</br>AND Andorra
</br>ARE United Arab Emirates
</br>ARG Argentina
</br>ARM Armenia
</br>ASM American Samoa
</br>ATA Antarctica
</br>ATF French Southern Territories
</br>ATG Antigua and Barbuda
</br>AUS Australia
</br>AUT Austria
</br>AZE Azerbaijan
</br>BDI Burundi
</br>BEL Belgium
</br>BEN Benin
</br>BES Bonaire, Sint Eustatius and Saba
</br>BFA Burkina Faso
</br>BGD Bangladesh
</br>BGR Bulgaria
</br>BHR Bahrain
</br>BHS Bahamas
</br>BIH Bosnia and Herzegovina
</br>BLM Saint Barthélemy
</br>BLR Belarus
</br>BLZ Belize
</br>BMU Bermuda
</br>BOL Bolivia (Plurinational State of)
</br>BRA Brazil
</br>BRB Barbados
</br>BRN Brunei Darussalam
</br>BTN Bhutan
</br>BVT Bouvet Island
</br>BWA Botswana
</br>CAF Central African Republic
</br>CAN Canada
</br>CCK Cocos (Keeling) Islands
</br>CHE Switzerland
</br>CHL Chile
</br>CHN China
</br>CIV Côte d'Ivoire
</br>CMR Cameroon
</br>COD Congo, Democratic Republic of the
</br>COG Congo
</br>COK Cook Islands
</br>COL Colombia
</br>COM Comoros
</br>CPV Cabo Verde
</br>CRI Costa Rica
</br>CUB Cuba
</br>CUW Curaçao
</br>CXR Christmas Island
</br>CYM Cayman Islands
</br>CYP Cyprus
</br>CZE Czechia
</br>D Germany
</br>DJI Djibouti
</br>DMA Dominica
</br>DNK Denmark
</br>DOM Dominican Republic
</br>DZA Algeria
</br>ECU Ecuador
</br>EGY Egypt
</br>ERI Eritrea
</br>ESH Western Sahara
</br>ESP Spain
</br>EST Estonia
</br>ETH Ethiopia
</br>FIN Finland
</br>FJI Fiji
</br>FLK Falkland Islands (Malvinas)
</br>FRA France
</br>FRO Faroe Islands
</br>FSM Micronesia (Federated States of)
</br>GAB Gabon
</br>GBR United Kingdom of Great Britain and Northern Ireland
</br>GEO Georgia
</br>GGY Guernsey
</br>GHA Ghana
</br>GIB Gibraltar
</br>GIN Guinea
</br>GLP Guadeloupe
</br>GMB Gambia
</br>GNB Guinea-Bissau
</br>GNQ Equatorial Guinea
</br>GRC Greece
</br>GRD Grenada
</br>GRL Greenland
</br>GTM Guatemala
</br>GUF French Guiana
</br>GUM Guam
</br>GUY Guyana
</br>HKG Hong Kong
</br>HMD Heard Island and McDonald Islands
</br>HND Honduras
</br>HRV Croatia
</br>HTI Haiti
</br>HUN Hungary
</br>IDN Indonesia
</br>IMN Isle of Man
</br>IND India
</br>IOT British Indian Ocean Territory
</br>IRL Ireland
</br>IRN Iran (Islamic Republic of)
</br>IRQ Iraq
</br>ISL Iceland
</br>ISR Israel
</br>ITA Italy
</br>JAM Jamaica
</br>JEY Jersey
</br>JOR Jordan
</br>JPN Japan
</br>KAZ Kazakhstan
</br>KEN Kenya
</br>KGZ Kyrgyzstan
</br>KHM Cambodia
</br>KIR Kiribati
</br>KNA Saint Kitts and Nevis
</br>KOR Korea, Republic of
</br>KWT Kuwait
</br>LAO Lao People's Democratic Republic
</br>LBN Lebanon
</br>LBR Liberia
</br>LBY Libya
</br>LCA Saint Lucia
</br>LIE Liechtenstein
</br>LKA Sri Lanka
</br>LSO Lesotho
</br>LTU Lithuania
</br>LUX Luxembourg
</br>LVA Latvia
</br>MAC Macao
</br>MAF Saint Martin (French part)
</br>MAR Morocco
</br>MCO Monaco
</br>MDA Moldova, Republic of
</br>MDG Madagascar
</br>MDV Maldives
</br>MEX Mexico
</br>MHL Marshall Islands
</br>MKD North Macedonia
</br>MLI Mali
</br>MLT Malta
</br>MMR Myanmar
</br>MNE Montenegro
</br>MNG Mongolia
</br>MNP Northern Mariana Islands
</br>MOZ Mozambique
</br>MRT Mauritania
</br>MSR Montserrat
</br>MTQ Martinique
</br>MUS Mauritius
</br>MWI Malawi
</br>MYS Malaysia
</br>MYT Mayotte
</br>NAM Namibia
</br>NCL New Caledonia
</br>NER Niger
</br>NFK Norfolk Island
</br>NGA Nigeria
</br>NIC Nicaragua
</br>NIU Niue
</br>NLD Netherlands
</br>NOR Norway
</br>NPL Nepal
</br>NRU Nauru
</br>NZL New Zealand
</br>OMN Oman
</br>PAK Pakistan
</br>PAN Panama
</br>PCN Pitcairn
</br>PER Peru
</br>PHL Philippines
</br>PLW Palau
</br>PNG Papua New Guinea
</br>POL Poland
</br>PRI Puerto Rico
</br>PRK Korea (Democratic People's Republic of)
</br>PRT Portugal
</br>PRY Paraguay
</br>PSE Palestine, State of
</br>PYF French Polynesia
</br>QAT Qatar
</br>REU Réunion
</br>ROU Romania
</br>RUS Russian Federation
</br>RWA Rwanda
</br>SAU Saudi Arabia
</br>SDN Sudan
</br>SEN Senegal
</br>SGP Singapore
</br>SGS South Georgia and the South Sandwich Islands
</br>SHN Saint Helena, Ascension and Tristan da Cunha
</br>SJM Svalbard and Jan Mayen
</br>SLB Solomon Islands
</br>SLE Sierra Leone
</br>SLV El Salvador
</br>SMR San Marino
</br>SOM Somalia
</br>SPM Saint Pierre and Miquelon
</br>SRB Serbia
</br>SSD South Sudan
</br>STP Sao Tome and Principe
</br>SUR Suriname
</br>SVK Slovakia
</br>SVN Slovenia
</br>SWE Sweden
</br>SWZ Eswatini
</br>SXM Sint Maarten (Dutch part)
</br>SYC Seychelles
</br>SYR Syrian Arab Republic
</br>TCA Turks and Caicos Islands
</br>TCD Chad
</br>TGO Togo
</br>THA Thailand
</br>TJK Tajikistan
</br>TKL Tokelau
</br>TKM Turkmenistan
</br>TLS Timor-Leste
</br>TON Tonga
</br>TTO Trinidad and Tobago
</br>TUN Tunisia
</br>TUR Turkey
</br>TUV Tuvalu
</br>TWN Taiwan, Province of China
</br>TZA Tanzania, United Republic of
</br>UGA Uganda
</br>UKR Ukraine
</br>UMI United States Minor Outlying Islands
</br>URY Uruguay
</br>USA United States of America
</br>UZB Uzbekistan
</br>VAT Holy See
</br>VCT Saint Vincent and the Grenadines
</br>VEN Venezuela (Bolivarian Republic of)
</br>VGB Virgin Islands (British)
</br>VIR Virgin Islands (U.S.)
</br>VNM Viet Nam
</br>VUT Vanuatu
</br>WLF Wallis and Futuna
</br>WSM Samoa
</br>YEM Yemen
</br>ZAF South Africa
</br>ZMB Zambia
</br>ZWE Zimbabwe
