import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) =>
  class extends React.Component {
    state = { error: null };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        },
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render = () => {
      const { error } = this.state;

      return (
        <Aux>
          <Modal show={error !== null} modalClosed={this.errorConfirmedHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    };
  };

export default withErrorHandler;
