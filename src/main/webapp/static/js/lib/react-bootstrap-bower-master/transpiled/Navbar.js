define(
  ["./react-es6","./react-es6/lib/cx","./BootstrapMixin","./PropTypes","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    /** @jsx React.DOM */

    var React = __dependency1__["default"];
    var classSet = __dependency2__["default"];
    var BootstrapMixin = __dependency3__["default"];
    var PropTypes = __dependency4__["default"];


    var Navbar = React.createClass({displayName: 'Navbar',
      mixins: [BootstrapMixin],

      propTypes: {
        fixedTop: React.PropTypes.bool,
        fixedBottom: React.PropTypes.bool,
        staticTop: React.PropTypes.bool,
        inverse: React.PropTypes.bool,
        role: React.PropTypes.string,
        componentClass: PropTypes.componentClass
      },

      getDefaultProps: function () {
        return {
          bsClass: 'navbar',
          bsStyle: 'default',
          role: 'navigation',
          componentClass: React.DOM.nav
        };
      },

      render: function () {
        var classes = this.getBsClassSet();
        var componentClass = this.props.componentClass;

        classes['navbar-fixed-top'] = this.props.fixedTop;
        classes['navbar-fixed-bottom'] = this.props.fixedBottom;
        classes['navbar-static-top'] = this.props.staticTop;
        classes['navbar-inverse'] = this.props.inverse;

        return this.transferPropsTo(
          componentClass( {className:classSet(classes), role:this.props.role}, 
            this.props.children
          )
        );
      }
    });

    __exports__["default"] = Navbar;
  });