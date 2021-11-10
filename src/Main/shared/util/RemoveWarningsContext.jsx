import { MyContext } from './context';
import ChildComponent from './ChildComponent';
// ...
return class WithSortableContainer extends React.Component {
  constructor(props) {
    // ADD NEW CONTEXT API - START
    static ContextType = MyContext;
      // ADD NEW CONTEXT API - END
    super(props)
  
    this.state = {
       
    }
  }
  

    // ADD REF FORWARDING ADD - START
    childRef = createRef();
    // ADD REF FORWARDING ADD - END

    constructor(props) {
// ...

    // REMOVE LEGACY CONTEXT - START
    // React legacy context API: add `childContextTypes` and `getChildContext` to establish a context provider
    // Any child component can then access it by defining `contextTypes`, see SortableElement
    // see: https://reactjs.org/docs/legacy-context.html
    // static childContextTypes = {
    //   manager: PropTypes.object.isRequired,
    // };

    // we set an instance of `Manager` into the legacy React context
    // getChildContext() {
    //   return {
    //     manager: this.manager,
    //   };
    // }
    // REMOVE LEGACY CONTEXT - END

// ...

getContainer() {
      const { getContainer } = this.props;
      if (typeof getContainer !== 'function') {
        // REMOVE FINDDOMNODE - START
        // return findDOMNode(this);
        // REMOVE FINDDOMNODE - END

        // ADD REF FORWARDING - START
        return this.childRef.current;
        // ADD REF FORWARDING - END
      }
    }
// ...

render() {
      const ref = config.withRef ? 'wrappedInstance' : null;

      return (
        // ADD NEW CONTEXT API & DOM FORWARDING - START
        <MyContext.Provider value={{ manager: this.manager }}>
          <ChildComponent ref={this.childRef}>
            {/* ADD CONTEXT API & DOM FORWARDING - END */}
            <WrappedComponent ref={ref} {...omit(this.props, omittedProps)} />
            {/* ADD CONTEXT API & DOM FORWARDING - START */}
          </ChildComponent>
        </MyContext.Provider>
        // ADD CONTEXT API & DOM FORWARDING - END
      );
    }
  }