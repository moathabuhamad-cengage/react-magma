import React from 'react';
import styled from '@emotion/styled';

const StyledTabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

interface TabsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  activeIndex?: number;
  testId?: string;
}

interface TabContextInterface {
  activeTabIndex: number;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TabsContext = React.createContext<TabContextInterface>({
  activeTabIndex: 0,
  setActiveTabIndex: () => 0
});

export const TabsContainer: React.FunctionComponent<
  TabsContainerProps
> = React.forwardRef((props, ref: React.Ref<any>) => {
  const { activeIndex, children, testId } = props;

  React.useEffect(() => {
    if (activeIndex >= 0) {
      setActiveTabIndex(activeIndex);
    }
  }, [activeIndex]);

  const [activeTabIndex, setActiveTabIndex] = React.useState(activeIndex || 0);

  return (
    <TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
      <StyledTabsContainer ref={ref} data-testid={testId} {...props}>
        {children}
      </StyledTabsContainer>
    </TabsContext.Provider>
  );
});

export const useTabsContext = () => React.useContext(TabsContext);