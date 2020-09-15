import React from 'react';
import {Text} from 'react-native';
import {FooterTab, Button, Footer} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FooterComponentStyles';

export const FooterComponent = () => {
  const tabs = [
    {
      title: 'TaxiCar',
      subtitle: '',
      icon: 'car',
    },
    {
      title: 'TaxiShare',
      subtitle: '',
      icon: 'car',
    },
    {
      title: 'TaxiPremium',
      subtitle: '',
      icon: 'car',
    },
    {
      title: 'TaxiBike',
      subtitle: '',
      icon: 'car',
    },
  ];

  return (
    <Footer>
      <FooterTab style={styles.footerContainer}>
        {tabs.map((t, i) => (
          <Button key={i}>
            <Icon
              size={20}
              name={t.icon}
              color={i === 0 ? '#ff5e3a' : 'grey'}
            />
            <Text
              style={{
                fontSize: 12,
                color: i === 0 ? '#ff5e3a' : 'grey',
              }}>
              {t.title}
            </Text>
            <Text style={styles.subText}>{t.subtitle}</Text>
          </Button>
        ))}
      </FooterTab>
    </Footer>
  );
};

export default FooterComponent;
