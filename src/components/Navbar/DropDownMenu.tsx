import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from "@heroicons/react/24/outline"
import type { NavItem } from "../../../utils/types";


interface Props {
  navItems: Array<NavItem>
}

const DropdownMenu: React.FC<Props> = ({ navItems }) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="p-2 inline-flex w-full justify-center rounded-md bg-black dark:bg-gray-200 bg-opacity-20 text-lg font-medium text-white dark:text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Bars3Icon className="w-6 h-6" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg focus:outline-none">
            <div className="p-1">
              {
                navItems.map((item) => {
                  return (
                    <Menu.Item key={item.name}>
                      <a href={item.href} className='group flex w-full items-center rounded-md p-2 text-md text-black hover:bg-gray-200'>{item.name}</a>
                    </Menu.Item>)
                })
              }
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  )
}


export default DropdownMenu
