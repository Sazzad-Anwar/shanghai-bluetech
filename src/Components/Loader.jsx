import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = () => {
    return <div className='flex justify-center items-center'>
        <div className='text-center'>
            <Spin indicator={antIcon} />
            <h5 className='animate-pulse'>Loading...</h5>
        </div>
    </div>
}

export default Loader
