import React, { Component } from "react";

const asyncRoute = (loadReducers, loadComponent, reducerRegistry) => (
  class AsyncRoute extends Component {
    constructor(props) {
      super(props);

      this.state = {
        Component: null,
        ReducersLoaded: false
      };
    }

    componentWillMount() {
      if(this.hasLoadedComponent() && this.haveReducersLoaded()) {
        return;
      }

      if (!this.haveReducersLoaded() && loadReducers) {
        loadReducers()
          .then(module => module.default)
          .then(reducers => {
            reducerRegistry.register(reducers);
            this.setState({ReducersLoaded: true});
          })
          .catch((err) => {
            console.error(`Cannot load reducers in <AsyncRoute />`);
            throw err;
          });
      }

      if (!this.hasLoadedComponent()) {
        loadComponent()
          .then(module => module.default)
          .then(Component => {
            this.setState({Component});
          })
          .catch((err) => {
            console.error(`Cannot load component in <AsyncRoute />`);
            throw err;
          });
      }
    }

    hasLoadedComponent() {
      return this.state.Component !== null;
    }

    haveReducersLoaded() {
      return this.state.ReducersLoaded;
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);

export default asyncRoute;