import Nav from './Nav';

import { Typography } from '@material-ui/core';

const Layout = ({ children }) => {
    return (
        <>
            <Typography>PointZeroAI</Typography>
            <Nav />
            <main>{children}</main>
        </>
    );
};

export default Layout;