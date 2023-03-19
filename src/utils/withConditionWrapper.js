import React from "react";

const withConditionalWrapper = (WrapperComponent, contentResolver) => {
  const ConditionalWrapper = (props) => {
    return ("function" !== typeof (WrapperComponent.withCondition))
      || WrapperComponent.withCondition(props) ? (
      <WrapperComponent {...props}>
        {contentResolver(props)}
      </WrapperComponent>
    ) : contentResolver(props);
  };
  return ConditionalWrapper;
};

const withConditionChainWrapper = (components) => components.reduce(
  (contentResolver, component) => withConditionalWrapper(component, contentResolver),
  () => (<></>)
);

const setComponentsShowRules = (components, rules) => components.map((component, index) => {
  rules[index] && (component.withCondition = rules[index]);
  return component;
});

export { withConditionChainWrapper as default, setComponentsShowRules };