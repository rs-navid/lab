import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Checkbox } from "semantic-ui-react";
// import ReactWOW from "react-wow";

const ListItemWithCheckboxAndEdit = (props) => {
  return (
    // <ReactWOW animation="fadeInUp" key={props.id} duration="2s">
    <div className="list-item d-flex align-items-center">
      <div className="checkbox">
        <Checkbox onChange={props.onChange} />
      </div>
      <div className="info">{props.children}</div>
      {!props.hideAction ? (
        <div className="action align-left mt-2 pl-3">
          <Button icon labelPosition="right" size="mini" onClick={props.onClick}>
            {props.buttonText ? props.buttonText : "ویرایش"}
            <Icon name={props.buttonIcon ? props.buttonIcon : "edit"} />
          </Button>
        </div>
      ) : null}
    </div>
    // </ReactWOW>
  );
};

ListItemWithCheckboxAndEdit.propTypes = {
  id: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export const SubItems = (props) => {
  return (
    <div className="data">
      <div className="sub-data">
        <div className="right">{props.data[0]}</div>
        <div className="left">{props.data[1]}</div>
      </div>
      <div className="sub-data">
        <div className="right">{props.data[2]}</div>
        <div className="left">{props.data[3]}</div>
      </div>
    </div>
  );
};

SubItems.propTypes = {
  data: PropTypes.array.isRequired,
};

export const SubItem = (props) => {
  return (
    <div className="data">
      <div className="sub-data">
        <div className="right">{props.data[0]}</div>
        <div className="left">{props.data[1]}</div>
      </div>
    </div>
  );
};

SubItem.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListItemWithCheckboxAndEdit;
