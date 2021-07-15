import React, {useState} from 'react';
import PropTypes from 'prop-types';

// imports components from Storybook
import { Header } from '../header/Header';
import { Input } from '../Input/Input';
import { Spotlight } from '../Spotlight/Spotlight';
import { Subtitle } from '../Subtitle/Subtitle';
import { Radio } from '../Radio/Radio';
import { Button } from '../Button/Button';
import { Body } from '../Body/Body';

export const Page = ({actualDate,
                      valorform,
                      handleReturnToHome,
                      handleConvertion,
                      handleItIsANumber,
                      handleInputChange,
                      handleInputBlur  }) => {

  return (
   <>
    <Header spotlight={actualDate()} subtitle='Currency' />

{valorform !== undefined && !valorform.result? 
  <>
    <Body>

      <div className='collum'>

        <Input label='Dólar'
              onKeyPress={handleItIsANumber}
              customName='dolarValue'
              showPrefix={true}
              customPlaceholder='0'
              prefix="$"
              value={valorform.dolarValue} 
              onChange={handleInputChange}
              onBlur={handleInputBlur}
        />

        <Input label='Taxa do Estado'
                onKeyPress={handleItIsANumber}
                customName='taxValue'
                customPlaceholder='0'
                showSuffix={true}
                suffix="%"
                value={valorform.taxValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
        />

      </div>

      <div className='collum'>
      
        <Radio 
              customName='purchaseType'
              handleOnClick={handleInputChange}
        />

      </div>

      <div className='collum'>

        <Button buttonType='primary' 
                handleOnClick={ handleConvertion} 
                label='Converter' 
                disabledStatus={valorform.disabledButton}
        />

      </div>

    </Body>
  </> : 
    <Body>

        <Button buttonType='secondary'
                handleOnClick={handleReturnToHome} 
                label='Voltar'
        />

        <Spotlight firstSpotlight={'R$ ' + valorform.realValueWithTax} 
                  themeOfSpotlight='spotlight-XXL'
        />

        <Subtitle subtitle={(valorform.priceUSD)}
                  boldSubititle='Cotacao do dolar: '
        />

        <Subtitle subtitle={(valorform.iofAboutpurchaseType + ' %')}
                  boldSubititle='Taxa de IOF: '
        />

        <Subtitle subtitle={'$ ' + (valorform.dolarValueNoTax)}
                  boldSubititle='Total em dólar sem imposto: ' 
        />

        <Subtitle subtitle={'$ ' + (valorform.dolarValueWithTax)} 
                  boldSubititle='Total em dólar com imposto: '
        />

        <Subtitle subtitle={'R$ ' + (valorform.realValueNoTax)} 
                  boldSubititle='Total em real sem imposto: ' 
        />

        <Subtitle subtitle={'R$' + (valorform.realValueWithTax)} 
                  boldSubititle='Total em real com imposto: '
        />

    </Body>
}
        
  </>
)};


Page.propTypes = {
  conversion: PropTypes.bool.isRequired
};

Page.defaultProps = {
  conversion: true
};
