import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import "./index.scss"
import LatestDataList from "../../components/latest-data-list";

class Index extends Taro.Component {


  config = {
    navigationBarTitleText: '最热',
  }



  render() {
    return (
      <View className='pages-hot-index-homepage'>

        <LatestDataList />

      </View>
    )
  }
}

export default Index
