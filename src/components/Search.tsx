import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { searchIcon } from '../../public/assets/icons'
import { Box, Divider } from '@mui/material'

const SearchMui = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F5F4F6',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 1),
    transition: theme.transitions.create('width'),
    width: '9rem',
    [theme.breakpoints.up('sm')]: {
      width: '15rem',
      '&:focus': {
        width: '20rem'
      }
    }
  },
  '& ::placeholder': {
    fontWeight: 'bold',
    fontSize: '16px',
  }
}))

export const Search = ({ text = '' }) => {
  const [value, setValue] = useState(text)

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const searchData = (e: React.FormEvent) => {
    e.preventDefault()
    setValue('')
  }

  return (
    <form onSubmit={searchData}>
      <Box
        sx={{
          justifyContent: 'center'
        }}
      >
        <SearchMui>
          <SearchIconWrapper
            sx={{
              display: {
                minWidth: '40px'
              }
            }}
          >
            <img src={searchIcon} alt="searchIcon" />
          </SearchIconWrapper>
          <Divider 
            orientation='vertical' 
            variant='middle'
            flexItem 
            sx={{
              width: '2px',
              backgroundColor: 'warning.main'
            }}
          />
          <StyledInputBase
            placeholder="Search or type"
            inputProps={{ 'aria-label': 'search' }}
            name='searchItem'
            value={value}
            onChange={changeInput}
            autoComplete='off'
            sx={{
              color: 'black'
            }}
          />
        </SearchMui>
      </Box>
    </form>
  )
}
