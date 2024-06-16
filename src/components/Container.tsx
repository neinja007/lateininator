import React from 'react';

type ContainerProps = {
	children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
	return <div className='w-full lg:w-[1024px] mx-auto mt-7 px-4'>{children}</div>;
}

export default Container;
