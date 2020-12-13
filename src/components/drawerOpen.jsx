import React, { Component } from "react";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    CadastrarBanco: { screen: HomeScreen },
    Depositar: { screen: MainScreenNavigator },
    Configurações: { screen: Profile },
    NovaCaregoria: { screen: Profile },
    Sair: { screen: Profile },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;