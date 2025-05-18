import React from 'react'

const AuthIcons = ({Icon, authName}: {Icon: React.ElementType, authName: string}) => {
    return (
        <div className='relative cursor-pointer border border-black w-60 py-2 m-auto rounded-4xl'>
            <div className='absolute top-0 bottom-0 px-2 flex justify-center items-center'>
                <Icon className="text-2xl" />
            </div>
            <p className='text-center'>{authName}</p>
        </div>
    )
}

export default AuthIcons