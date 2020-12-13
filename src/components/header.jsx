import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotaoRetangular = (props) => {
        return(
            <Header androidStatusBarColor="#F7931E" style={styles.header} hasTabs>
            <Left>
                <Button transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Início</Title>
            </Body>
            <Right>
            <Button transparent>
                  <Icon name="search" />
                </Button>
            <Button transparent>
                  <Icon name="notifications" />
                </Button>
            <Button transparent>
                  <Icon name="share" />
                </Button>
            </Right>
            </Header>
        );
}

export default BotaoRetangular;