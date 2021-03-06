import React ,{useState, useEffect} from 'react'
import Head from 'next/head'

// imports styles css
import styles from '../styles/Home.module.css'

// imports components from Storybook
import {Page} from '../stories/Page/Page'

export default function Home() {

  // Global State 
  let [ conversao, setConversao ] = useState()
  let [ valorform, setValorForm ] = useState({ 
    dolarValue:'0',
    dolarValueNoTax:null,
    dolarValueWithTax:null,
    realValue:null, 
    realValueNoTax:null,
    realValueWithTax:null,
    taxValue:'0',
    purchaseType:'Dinheiro',
    iofAboutpurchaseType:null,
    disabledButton:true,
    result:false,
    priceUSD:null})

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    return  setValorForm({
        ...valorform,
        [name]:value,
      })
  }

  const  handleItIsANumber = (e) => {
    let  evt = e ? e : window.event
    var charCode = evt.which ? evt.which : evt.keyCode

    if (charCode > 31 &&(charCode < 47 || charCode > 57) &&charCode !== 46) {
      evt.preventDefault()
    } else {
      return true
    }
  }

  const handleInputBlur = (e) =>{
    const {name, value} = e.target
    
    if(!valorform.dolarValue || !valorform.taxValue ){
    return  setValorForm({
        ...valorform,
        [name]:value,
        disabledButton:true,
      })
    } else{
      return  setValorForm({
        ...valorform,
        [name]:value,
        disabledButton:false,
      })
    }
  }

  const handleReturnToHome = (e)=>{
    setValorForm({  
      dolarValue:null,//valor do dolar sem imposto
      dolarValueNoTax:null,//valor do dolar sem imposto
      dolarValueWithTax:null,//valor do dolar Com imposto
      realValue:null,
      realValueNoTax:null,// valor do real sem a taxa de IOF
      realValueWithTax:null, // Valor total de real com imposto
      taxValue:null,
      purchaseType:valorform.purchaseType,
      iofAboutpurchaseType: (valorform.purchaseType === 'Dinheiro'? 1.10 : 6.38),
      disabledButton:true,
      priceUSD:conversao.high,
      result: false
    })
  }

  let handleActualDate = () => {
    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0');
    let ano = data.getFullYear();
    let monthsName = new Array ("janeiro", "fevereiro", "mar??o", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    let dataatual = dia + ' ' +  'de' +  ' ' + monthsName [data.getMonth() - 1 ] + ' ' + ano;
    return dataatual  + '     |     ' +  data.toLocaleTimeString('pt-BT')
  }

    const handleConvertion = (e) => {
      const {name, value} = e.target

        // Comprando com dinheiro: [(Valor do produto em d??lar) + (imposto do estado aonde esta comprando)] x (valor do d??lar + IOF da compra de d??lar)
        // Exemplo: (USD$ 149,00 + 8,87%) * (R$ 4,15 + 1,10%)
        // console.log(valorform.purchaseType)
        // console.log(parseFloat(valorform.dolarValue), 'valor do dolar')
        // console.log(parseFloat(valorform.taxValue), 'valor da taxa')
        // console.log((parseFloat(valorform.dolarValue) + (parseFloat(valorform.taxValue) * parseFloat(valorform.dolarValue) / 100 )),  'soma da primeira conta')

        // console.log(parseFloat(conversao.high), 'Doleta')
        // console.log(valorform.purchaseType === 'Dinheiro'? 1.10 : 6.38, 'iof da compra')
        // console.log((valorform.purchaseType === 'Dinheiro'? 1.10 : 6.38) * parseFloat(conversao.high) /100, 'porcentagem da moeda 1.1')
        // console.log((parseFloat(conversao.high) + ((valorform.purchaseType === 'Dinheiro'? 1.1 :6.38) * parseFloat(conversao.high) /100)), 'soma da  segunda conta')

        //  console.log(((parseFloat(valorform.dolarValue) + (parseFloat(valorform.taxValue) * parseFloat(valorform.dolarValue) 

      setValorForm({  
         ...valorform,  
         dolarValue:valorform.dolarValue,//valor do dolar sem imposto
         dolarValueNoTax:valorform.dolarValue,//valor do dolar sem imposto
         dolarValueWithTax:(parseFloat(valorform.dolarValue) + (parseFloat(valorform.taxValue) * parseFloat(valorform.dolarValue) / 100 )).toFixed(2),//valor do dolar Com imposto
         realValue:null,
         realValueNoTax:((parseFloat(valorform.dolarValue) + (parseFloat(valorform.taxValue) * parseFloat(valorform.dolarValue) / 100 )) * (parseFloat(conversao.high)) ).toFixed(2),// valor do real sem a taxa de IOF
         realValueWithTax:((parseFloat(valorform.dolarValue) + (parseFloat(valorform.taxValue) * parseFloat(valorform.dolarValue) / 100 )) * (parseFloat(conversao.high) + ((valorform.purchaseType === 'Dinheiro'?1.1:6.38) * parseFloat(conversao.high) /100))).toFixed(2), // Valor total de real com imposto
         taxValue:parseFloat(valorform.taxValue),
         purchaseType:valorform.purchaseType,
         iofAboutpurchaseType: (valorform.purchaseType === 'Dinheiro'? 1.10 : 6.38),
         disabledButton:false,
         priceUSD:conversao.high,
         result: true
      })
    }

  useEffect(() => {
    let fetchData = fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then((response) =>response.json())
    .then( data => { 
      let setData = data.USDBRL 
      setConversao(setData)});
  },[])

  useEffect(() => {},[conversao])

    return (
      <div className={styles.container}>

        <Head>
          <title>Dash | Conversor de moedas</title>
          <meta name="description" content="Dash | Conversor de moedas" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}> 

        <Page actualDate={handleActualDate}
              valorform={valorform}
              handleReturnToHome={handleReturnToHome}
              handleConvertion={handleConvertion}
              handleItIsANumber={handleItIsANumber}
              handleInputChange={handleInputChange}
              handleInputBlur={handleInputBlur}  >
        </Page>
         
        </main>
      </div>
    )
}
