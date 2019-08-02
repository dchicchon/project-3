import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  // container: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 200,
  },
  // menu: {
  //   width: 200,
  // },
}));

export default function TextFields() {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   name: 'Cat in the Hat',
  //   age: '',
  //   multiline: 'Controlled',
  //   currency: 'EUR',
  // });

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-search"
        label="Search Location"
        type="search"
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}


//------------input searchbar trial 2
// import React from "react";
// import AppBar from "@material-ui/core/AppBar";

// import InputBase from "@material-ui/core/InputBase";
// import { fade, makeStyles } from "@material-ui/core/styles";

// import SearchIcon from "@material-ui/icons/Search";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1,
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block"
//     }
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto"
//     }
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   inputRoot: {
//     color: "inherit"
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: 120,
//       "&:focus": {
//         width: 200
//       }
//     }
//   }
// }));

// export default function SearchAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <div className={classes.search}>
//           <div className={classes.searchIcon}>
//             <SearchIcon />
//           </div>
//           <InputBase
//             placeholder="Search…"
//             classes={{
//               root: classes.inputRoot,
//               input: classes.inputInput
//             }}
//             inputProps={{ "aria-label": "search" }}
//           />
//         </div>
//       </AppBar>
//     </div>
//   );
// }



//------------input1 searchbar trial 1
// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import Select from 'react-select';
// import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import NoSsr from '@material-ui/core/NoSsr';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Chip from '@material-ui/core/Chip';
// import MenuItem from '@material-ui/core/MenuItem';
// import CancelIcon from '@material-ui/icons/Cancel';

// const suggestions = [
//   { label: 'Afghanistan' },
//   { label: 'Aland Islands' },
//   { label: 'Albania' },
//   { label: 'Algeria' },
//   { label: 'American Samoa' },
//   { label: 'Andorra' },
//   { label: 'Angola' },
//   { label: 'Anguilla' },
//   { label: 'Antarctica' },
//   { label: 'Antigua and Barbuda' },
//   { label: 'Argentina' },
//   { label: 'Armenia' },
//   { label: 'Aruba' },
//   { label: 'Australia' },
//   { label: 'Austria' },
//   { label: 'Azerbaijan' },
//   { label: 'Bahamas' },
//   { label: 'Bahrain' },
//   { label: 'Bangladesh' },
//   { label: 'Barbados' },
//   { label: 'Belarus' },
//   { label: 'Belgium' },
//   { label: 'Belize' },
//   { label: 'Benin' },
//   { label: 'Bermuda' },
//   { label: 'Bhutan' },
//   { label: 'Bolivia, Plurinational State of' },
//   { label: 'Bonaire, Sint Eustatius and Saba' },
//   { label: 'Bosnia and Herzegovina' },
//   { label: 'Botswana' },
//   { label: 'Bouvet Island' },
//   { label: 'Brazil' },
//   { label: 'British Indian Ocean Territory' },
//   { label: 'Brunei Darussalam' },
// ].map(suggestion => ({
//   value: suggestion.label,
//   label: suggestion.label,
// }));

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     height: 250,
//     minWidth: 290,
//   },
//   input: {
//     display: 'flex',
//     padding: 0,
//     height: 'auto',
//   },
//   valueContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     flex: 1,
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   chip: {
//     margin: theme.spacing(0.5, 0.25),
//   },
//   chipFocused: {
//     backgroundColor: emphasize(
//       theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
//       0.08,
//     ),
//   },
//   noOptionsMessage: {
//     padding: theme.spacing(1, 2),
//   },
//   singleValue: {
//     fontSize: 16,
//   },
//   placeholder: {
//     position: 'absolute',
//     left: 2,
//     bottom: 6,
//     fontSize: 16,
//   },
//   paper: {
//     position: 'absolute',
//     zIndex: 1,
//     marginTop: theme.spacing(1),
//     left: 0,
//     right: 0,
//   },
//   divider: {
//     height: theme.spacing(2),
//   },
// }));

// function NoOptionsMessage(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.noOptionsMessage}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// NoOptionsMessage.propTypes = {
//   /**
//    * The children to be rendered.
//    */
//   children: PropTypes.node,
//   /**
//    * Props to be passed on to the wrapper.
//    */
//   innerProps: PropTypes.object.isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function inputComponent({ inputRef, ...props }) {
//   return <div ref={inputRef} {...props} />;
// }

// inputComponent.propTypes = {
//   inputRef: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.any.isRequired,
//     }),
//   ]),
// };

// function Control(props) {
//   const {
//     children,
//     innerProps,
//     innerRef,
//     selectProps: { classes, TextFieldProps },
//   } = props;

//   return (
//     <TextField
//       fullWidth
//       InputProps={{
//         inputComponent,
//         inputProps: {
//           className: classes.input,
//           ref: innerRef,
//           children,
//           ...innerProps,
//         },
//       }}
//       {...TextFieldProps}
//     />
//   );
// }

// Control.propTypes = {
//   /**
//    * Children to render.
//    */
//   children: PropTypes.node,
//   /**
//    * The mouse down event and the innerRef to pass down to the controller element.
//    */
//   innerProps: PropTypes.shape({
//     onMouseDown: PropTypes.func.isRequired,
//   }).isRequired,
//   innerRef: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.any.isRequired,
//     }),
//   ]).isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function Option(props) {
//   return (
//     <MenuItem
//       ref={props.innerRef}
//       selected={props.isFocused}
//       component="div"
//       style={{
//         fontWeight: props.isSelected ? 500 : 400,
//       }}
//       {...props.innerProps}
//     >
//       {props.children}
//     </MenuItem>
//   );
// }

// Option.propTypes = {
//   /**
//    * The children to be rendered.
//    */
//   children: PropTypes.node,
//   /**
//    * props passed to the wrapping element for the group.
//    */
//   innerProps: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     key: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//     onMouseMove: PropTypes.func.isRequired,
//     onMouseOver: PropTypes.func.isRequired,
//     tabIndex: PropTypes.number.isRequired,
//   }).isRequired,
//   /**
//    * Inner ref to DOM Node
//    */
//   innerRef: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.any.isRequired,
//     }),
//   ]).isRequired,
//   /**
//    * Whether the option is focused.
//    */
//   isFocused: PropTypes.bool.isRequired,
//   /**
//    * Whether the option is selected.
//    */
//   isSelected: PropTypes.bool.isRequired,
// };

// function Placeholder(props) {
//   const { selectProps, innerProps = {}, children } = props;
//   return (
//     <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
//       {children}
//     </Typography>
//   );
// }

// Placeholder.propTypes = {
//   /**
//    * The children to be rendered.
//    */
//   children: PropTypes.node,
//   /**
//    * props passed to the wrapping element for the group.
//    */
//   innerProps: PropTypes.object,
//   selectProps: PropTypes.object.isRequired,
// };

// function SingleValue(props) {
//   return (
//     <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
//       {props.children}
//     </Typography>
//   );
// }

// SingleValue.propTypes = {
//   /**
//    * The children to be rendered.
//    */
//   children: PropTypes.node,
//   /**
//    * Props passed to the wrapping element for the group.
//    */
//   innerProps: PropTypes.any.isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function ValueContainer(props) {
//   return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
// }

// ValueContainer.propTypes = {
//   /**
//    * The children to be rendered.
//    */
//   children: PropTypes.node,
//   selectProps: PropTypes.object.isRequired,
// };

// function MultiValue(props) {
//   return (
//     <Chip
//       tabIndex={-1}
//       label={props.children}
//       className={clsx(props.selectProps.classes.chip, {
//         [props.selectProps.classes.chipFocused]: props.isFocused,
//       })}
//       onDelete={props.removeProps.onClick}
//       deleteIcon={<CancelIcon {...props.removeProps} />}
//     />
//   );
// }

// MultiValue.propTypes = {
//   children: PropTypes.node,
//   isFocused: PropTypes.bool.isRequired,
//   removeProps: PropTypes.shape({
//     onClick: PropTypes.func.isRequired,
//     onMouseDown: PropTypes.func.isRequired,
//     onTouchEnd: PropTypes.func.isRequired,
//   }).isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function Menu(props) {
//   return (
//     <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
//       {props.children}
//     </Paper>
//   );
// }

// Menu.propTypes = {
//   /**
//    * The children to be rendered.
//    */
//   children: PropTypes.element.isRequired,
//   /**
//    * Props to be passed to the menu wrapper.
//    */
//   innerProps: PropTypes.object.isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// const components = {
//   Control,
//   Menu,
//   MultiValue,
//   NoOptionsMessage,
//   Option,
//   Placeholder,
//   SingleValue,
//   ValueContainer,
// };

// export default function IntegrationReactSelect() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [single, setSingle] = React.useState(null);
//   const [multi, setMulti] = React.useState(null);

//   function handleChangeSingle(value) {
//     setSingle(value);
//   }

//   function handleChangeMulti(value) {
//     setMulti(value);
//   }

//   const selectStyles = {
//     input: base => ({
//       ...base,
//       color: theme.palette.text.primary,
//       '& input': {
//         font: 'inherit',
//       },
//     }),
//   };

//   return (
//     <div className={classes.root}>
//       <NoSsr>
//         <Select
//           classes={classes}
//           styles={selectStyles}
//           inputId="react-select-single"
//           TextFieldProps={{
//             label: 'Country',
//             InputLabelProps: {
//               htmlFor: 'react-select-single',
//               shrink: true,
//             },
//           }}
//           placeholder="Search a country (start with a)"
//           options={suggestions}
//           components={components}
//           value={single}
//           onChange={handleChangeSingle}
//         />
//         <div className={classes.divider} />
//         <Select
//           classes={classes}
//           styles={selectStyles}
//           inputId="react-select-multiple"
//           TextFieldProps={{
//             label: 'Countries',
//             InputLabelProps: {
//               htmlFor: 'react-select-multiple',
//               shrink: true,
//             },
//           }}
//           placeholder="Select multiple countries"
//           options={suggestions}
//           components={components}
//           value={multi}
//           onChange={handleChangeMulti}
//           isMulti
//         />
//       </NoSsr>
//     </div>
//   );
// }