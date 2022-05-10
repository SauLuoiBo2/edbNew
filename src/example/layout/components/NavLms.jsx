import * as Mui from '@mui/material';
import { Nav } from 'components';
import { lmsConfig } from 'router';

const NavLms = () => {
    return (
        <>
            <Mui.Stack spacing={2}>
                {lmsConfig.getData().map((data, i) => {
                    return <Nav.EuiNavMenu data={data} key={i} icon={data.icon} />;
                })}
            </Mui.Stack>
        </>
    );
};

export { NavLms };
