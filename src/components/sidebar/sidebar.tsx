import { useState } from 'react'
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core'
import { IconHome2, IconCalculator, IconDiscount2, IconCalendarStats, IconUsersGroup, IconLogout, IconSettings } from '@tabler/icons-react'
import { Logo } from '../../components/index'

const useStyles = createStyles(theme => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.6,
    '&:hover': {
      opacity: 1
    }
  },
  active: {
    opacity: 1
  }
}))

interface NavbarLinkProps {
  icon: React.FC<any>
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }} onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="30" stroke={1.5} />
        <p style={{ fontSize: '10px', textTransform: 'uppercase' }}>{label}</p>
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconCalculator, label: 'Account' },
  { icon: IconDiscount2, label: 'sales' },
  { icon: IconCalendarStats, label: 'marketing' },
  { icon: IconUsersGroup, label: 'humans' }
]

export default function NavbarMinimalColored() {
  const [active, setActive] = useState(2)

  const links = mockdata.map((link, index) => <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />)

  return (
    <Navbar
      height={'100%'}
      width={{ base: 100 }}
      p="lg"
      sx={theme => ({
        backgroundColor: 'var(--neutrals-2, #23262F)'
      })}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Center>
        <Logo />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={40}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={40}>
          <NavbarLink icon={IconSettings} label="settings" />
          <NavbarLink icon={IconLogout} label="" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}
