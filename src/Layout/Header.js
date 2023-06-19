import React, { Fragment, useState } from "react";
import { Dropdown, Layout, Menu, Avatar, Button, Drawer, Link } from "antd";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import "./GloballLayout.less";
import images from "../configs/images";
import {
  FaUserAlt,
  FaEdit,
  FaCog,
  FaElementor,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const { Header } = Layout;
console.log('Header進入');
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HeaderComponent(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="header">
      <Header>
        header
      </Header>

    </div>
  );
}

export default HeaderComponent;
