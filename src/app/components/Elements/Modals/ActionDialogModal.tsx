import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Modal, Row, Col, Typography, Space } from 'antd';

const { Title, Text } = Typography;
const StyledModal = styled(Modal).withConfig({
  shouldForwardProp: prop => !['noPadding'].includes(prop),
})`
  .ant-modal-header {
    display: none;
  }
  margin: 0 auto;
`;

/**
 * Resusable Modal with Yes/No or Ok/Cancel Behavior
 * @param {object} props Component props
 * @param {string} props.title Header Modal Title (Optional)
 * @param {string} props.subtitle Modal SubTitle (Optional)
 * @param {bool} props.visible Toggle to hide show modal (Required) Default: truestring
 * @param {func} props.onOk
 * @param {func} props.onNo
 * @param {func} props.onClose
 * @param {string} props.mode, choices, action
 * @param {string} props.buttonDirection, center, end, start
 * @param {string} props.subtitleFontLevel, normal, small
 */
const ActionDialogModal = ({
  title,
  titleFontLevel = 4,
  subtitle,
  subtitleFontLevel = 'normal',
  visible = false,
  okText,
  noText,
  onOk,
  onNo = null,
  onClose,
  mode = 'action',
  children,
  loadingTip,
  isLoading,
  ...rest
}) => (
  <StyledModal
    centered
    visible={visible}
    width={500}
    footer={null}
    closable={false}
    onCancel={onClose}
    {...rest}
  >
    <Row align="middle" justify="center">
      <Col>
        {title && <Title level={4}>{title}</Title>}
        {subtitle && (
          <Text
            style={{
              fontSize: subtitleFontLevel === 'normal' ? '1em' : '0.85em',
            }}
          >
            {subtitle}
          </Text>
        )}
        {children}
      </Col>
    </Row>
  </StyledModal>
);

ActionDialogModal.propTypes = {
  mode: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  okText: PropTypes.string,
  noText: PropTypes.string,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onNo: PropTypes.func,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.any,
  titleFontLevel: PropTypes.number,
  buttonDirection: PropTypes.string,
  loadingTip: PropTypes.string,
  subtitleFontLevel: PropTypes.string,
  isLoading: PropTypes.any,
};

export default ActionDialogModal;
