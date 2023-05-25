import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { NAV_ITEMS } from "./categoryItems";

const CategoryNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [mds] = useMediaQuery("(min-width: 1194px)");
  return (
    <Box>
      <Flex
        bg={useColorModeValue("rgb(254,221,0)", "rgb(254,221,0)")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        borderBottom={0}
        borderStyle={"solid"}
        w="100%"
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} display={mds ? "none" : "flex"}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={"start"}>
          <Flex display={mds ? "flex" : "none"}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Stack direction={"row"} spacing={4} marginLeft={100}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "/product"}
                  fontWeight="semibold"
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent bg={popoverContentBgColor} p={4}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  const DesktopSubNav = ({ label, href, subLabel, Img }) => {
    return (
      <Link
        href={href}
        role={"group"}
        _hover={{ bg: useColorModeValue("yellow.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "yellow.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
            <Image src={Img} />
          </Box>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Box>
        <Box display="flex" ml={9} marginTop={5}>
          <Box>
            <Icon className="IC" fontSize="20px">
              <BsFillCartFill />
            </Icon>
          </Box>
          <Box ml={3}>
            <Icon className="IC" fontSize="20px">
              <BiSearch />
            </Icon>
          </Box>
          <Box ml={3}>
            <Icon className="IC" fontSize="20px">
              <FaUserAlt />
            </Icon>
          </Box>
        </Box>
        <Stack bg={useColorModeValue("white", "gray.800")} p={4}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      </Box>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "/product"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

export default CategoryNavbar;
