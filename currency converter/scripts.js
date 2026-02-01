const { cache } = require("react");

const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement =document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');
const countries = [
  {code:"USD", name: "United States Dollar"},
  {code:"INR", name: "Indian Rupee"},
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "NPR", name: "Nepalese Rupee" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "DKK", name: "Danish Krone" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "ZAR", name: "South African Rand" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "COP", name: "Colombian Peso" },
  { code: "PEN", name: "Peruvian Sol" },
  { code: "VEF", name: "Venezuelan Bolívar" },
  { code: "KRW", name: "South Korean Won" },
  { code: "THB", name: "Thai Baht" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "AFN", name: "Afghan Afghani" },
  { code: "IRR", name: "Iranian Rial" },
  { code: "IQD", name: "Iraqi Dinar" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "AED", name: "UAE Dirham" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "ILS", name: "Israeli New Shekel" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "UGX", name: "Ugandan Shilling" },
  { code: "TZS", name: "Tanzanian Shilling" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "DZD", name: "Algerian Dinar" },
  { code: "TND", name: "Tunisian Dinar" },
  { code: "ETB", name: "Ethiopian Birr" },
  { code: "XOF", name: "West African CFA Franc" },
  { code: "XAF", name: "Central African CFA Franc" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "RON", name: "Romanian Leu" },
  { code: "BGN", name: "Bulgarian Lev" },
  { code: "HRK", name: "Croatian Kuna" },
  { code: "RSD", name: "Serbian Dinar" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "ISK", name: "Icelandic Krona" },
  { code: "LTL", name: "Lithuanian Litas" },
  { code: "LVL", name: "Latvian Lats" },
  { code: "GEL", name: "Georgian Lari" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "AZN", name: "Azerbaijani Manat" },
  { code: "KZT", name: "Kazakhstani Tenge" },
  { code: "UZS", name: "Uzbekistani Som" },
  { code: "MNT", name: "Mongolian Tugrik" },
  { code: "LAK", name: "Lao Kip" },
  { code: "KHR", name: "Cambodian Riel" },
  { code: "MMK", name: "Myanmar Kyat" },
  { code: "BND", name: "Brunei Dollar" },
  { code: "FJD", name: "Fijian Dollar" },
  { code: "PGK", name: "Papua New Guinean Kina" },
  { code: "SBD", name: "Solomon Islands Dollar" },
  { code: "TOP", name: "Tongan Paʻanga" },
  { code: "WST", name: "Samoan Tala" },
  { code: "JMD", name: "Jamaican Dollar" },
  { code: "TTD", name: "Trinidad and Tobago Dollar" },
  { code: "BBD", name: "Barbadian Dollar" },
  { code: "BSD", name: "Bahamian Dollar" },
  { code: "HTG", name: "Haitian Gourde" },
  { code: "DOP", name: "Dominican Peso" },
  { code: "CUP", name: "Cuban Peso" },
  { code: "BOB", name: "Bolivian Boliviano" },
  { code: "PYG", name: "Paraguayan Guarani" },
  { code: "UYU", name: "Uruguayan Peso" },
  { code: "BWP", name: "Botswana Pula" },
  { code: "NAD", name: "Namibian Dollar" },
  { code: "MWK", name: "Malawian Kwacha" },
  { code: "ZMW", name: "Zambian Kwacha" },
  { code: "SLL", name: "Sierra Leonean Leone" },
  { code: "LRD", name: "Liberian Dollar" } 
];
countries.forEach(country =>
{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;
fromCurrencyElement.appendChild(option1);
toCurrencyElement.appendChild(option2);

fromCurrencyElement.value= "USD";
toCurrencyElement.value = "INR";
}
);
const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value; 
    const toCurrency = toCurrencyElement.value;
    resultElement.textContent ="fetching exchange rate....";
try{
       

    // Fetching data
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    
    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2); // Rounds to 2 decimals
    if(typeof conversionRate === 'undefined'){
        resultElement.textContent = "Exchange rate data is not avialabe for selected countries!!";
        convertedAmountElement = "";
    }
    else{
    convertedAmountElement.value = convertedAmount;
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`; 
    }
   }
catch(error){
    converterContainer.innerHTML = '<h2>Error while fatching exchnagrate</h2>';
    
}
}
fromAmountElement.addEventListener('input',getExchangeRate);
fromCurrencyElement.addEventListener('change',getExchangeRate);
toCurrencyElement.addEventListener('change',getExchangeRate); 
window.addEventListener('load', getExchangeRate);
