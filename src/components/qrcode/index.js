import React from 'react';
import Qrious from 'qrious';
import PropTypes from 'prop-types';

class QrCode extends React.Component {
  render() {
    const { size, link } = this.props;

    if (link) {
      this.id = `qr-${link.substring(0, 4)}`;

      const element = document.getElementById(this.id);
      this.qr = new Qrious({
        element,
      });

      this.qr.set({
        size,
        level: 'H',
        value: link,
        background: 'white',
        foreground: 'black',
        backgroundAlpha: 1,
        foregroundAlpha: 1,
      });
    }

    return <canvas id={this.id} />;
  }
}

QrCode.propTypes = {
  size: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default QrCode;
