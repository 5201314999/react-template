import React, { Component } from "react";

export default function asyncComponent(importComponent:any) {
  interface Iprops{

  }
  interface Istates{
    component:any
  }
  class AsyncComponent extends Component<Iprops,Istates> {

    state:Readonly<Istates>={
      component:null
    }

    constructor(props:Iprops) {
      super(props);
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({component});
    }

    render() {
      const C:any = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}