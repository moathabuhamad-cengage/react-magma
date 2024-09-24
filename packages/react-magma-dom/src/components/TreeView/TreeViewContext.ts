import * as React from 'react';
import { TreeViewSelectable } from './types';
import { IndeterminateCheckboxStatus } from '../IndeterminateCheckbox';

export interface TreeItemSelectedInterface {
  itemId?: string;
  checkedStatus: IndeterminateCheckboxStatus;
}

export interface TreeViewItemInterface {
  itemId?: string;
  parentId?: string | null;
  icon?: React.ReactNode;
  checkedStatus: IndeterminateCheckboxStatus;
  hasOwnTreeItems: boolean
}

export interface TreeViewContextInterface {
  children?: React.ReactNode[];
  hasIcons: boolean;
  initialExpandedItems: Array<string>;
  initialExpandedItemsNeedUpdate: boolean;
  onExpandedChange?: (event: React.SyntheticEvent) => void;
  onSelectedItemChange?: (
    selectedItems: Array<TreeItemSelectedInterface>
  ) => void;
  registerTreeItem: (
    itemRefArray: React.MutableRefObject<React.MutableRefObject<Element>[]>,
    itemRef: React.MutableRefObject<Element>
  ) => void;
  selectable: TreeViewSelectable;
  selectedItems: Array<TreeItemSelectedInterface>;
  setInitialExpandedItemsNeedUpdate: React.Dispatch<React.SetStateAction<any>>;
  treeItemRefArray?: React.MutableRefObject<React.MutableRefObject<Element>[]>;
  itemToFocus?: string;
  checkParents: boolean;
  checkChildren: boolean;
  items: TreeViewItemInterface[];
  selectItem: (data: Pick<TreeViewItemInterface, 'itemId' | 'checkedStatus'>) => void
}

export const TreeViewContext = React.createContext<TreeViewContextInterface>({
  hasIcons: false,
  initialExpandedItems: [],
  initialExpandedItemsNeedUpdate: false,
  registerTreeItem: (elements, element) => {},
  selectable: TreeViewSelectable.single,
  selectedItems: [],
  setInitialExpandedItemsNeedUpdate: () => {},
  checkParents: true,
  checkChildren: true,
  items: [],
  selectItem: () => undefined
});
