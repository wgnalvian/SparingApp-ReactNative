import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserSvg from './asset/userHeader.svg';
import MainUser from './asset/mainUser.svg';
import MainStadium from './asset/mainStadium.svg';
import MainLocker from './asset/mainLocker.svg';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="mainApp" component={RouteTabPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RouteTabPages = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'home') {
            return focused ? (
              <View style={styles.container}>
                <View style={styles.itemContainer}>
                  <Image source={require('./asset/home.png')} />
                  <Text style={styles.itemText}>
                    {route.name.toUpperCase()}
                  </Text>
                </View>
              </View>
            ) : (
              <Image source={require('./asset/home.png')} />
            );
          }
          if (route.name === 'stadium') {
            return focused ? (
              <View style={styles.container}>
                <View style={styles.itemContainer}>
                  <Image source={require('./asset/stadium.png')} />
                  <Text style={styles.itemText}>
                    {route.name.toUpperCase()}
                  </Text>
                </View>
              </View>
            ) : (
              <Image source={require('./asset/stadium.png')} />
            );
          }
          if (route.name === 'user') {
            return focused ? (
              <View style={styles.container}>
                <View style={styles.itemContainer}>
                  <Image source={require('./asset/user.png')} />
                  <Text style={styles.itemText}>
                    {route.name.toUpperCase()}
                  </Text>
                </View>
              </View>
            ) : (
              <Image source={require('./asset/user.png')} />
            );
          }
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#D088F2',
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen component={Home} name="home" />
      <Tab.Screen component={User} name="user" />
      <Tab.Screen component={Stadium} name="stadium" />
    </Tab.Navigator>
  );
};

// Home
const Home = () => {
  const [active, setActive] = useState('mid');
  useEffect(() => {}, [active]);
  return (
    <View style={styles.pageHome}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.headerHome}>
        <View style={styles.userInfo}>
          <UserSvg width={50} />
          <View style={styles.textUserInfo}>
            <Text>Hallo Cok !</Text>
            <Text style={{fontWeight: '900'}}>Alvian</Text>
          </View>
        </View>
        <View style={styles.scheduleInfo}>
          <View style={styles.scheduleText}>
            <Text style={{fontWeight: '900', alignSelf: 'flex-end'}}>
              19 . 00 wib
            </Text>
            <Text>Sabtu, 20 Maret 2020</Text>
          </View>
          <Image source={require('./asset/stadiumHeader.jpg')} />
        </View>
      </View>
      <View style={styles.hero}>
        <Image
          style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
          resizeMode="cover"
          source={require('./asset/Banner.png')}
        />
      </View>
      <Text style={{fontSize: 23, marginTop: 5}}>
        Ayo Wayahe, <Text style={{fontWeight: '900'}}>Futsal</Text>
      </Text>
      <View
        style={{
          height: 150,

          flexDirection: 'row',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => setActive('left')}
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <View
            style={{
              width: '90%',
              height: '70%',
              borderWidth: 1,
              borderColor: active === 'left' ? 'transparent' : 'black',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: active === 'left' ? '#797FFB' : 'white',
            }}>
            <View style={{position: 'absolute', width: 90, top: -50, left: 5}}>
              <MainUser height="90" width="90%" />
            </View>

            <Text
              style={{
                marginTop: 30,
                fontWeight: '900',
                fontSize: 15,
                color: active === 'left' ? 'white' : 'black',
              }}>
              JOIN
            </Text>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 15,
                color: active === 'left' ? 'white' : 'black',
              }}>
              TEAM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive('mid')}
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <View
            style={{
              width: '90%',
              height: '70%',
              borderWidth: 1,
              borderColor: active === 'mid' ? 'transparent' : 'black',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: active === 'mid' ? '#797FFB' : 'white',
            }}>
            <View style={{position: 'absolute', width: 90, top: -50, left: 5}}>
              <MainStadium height="90" width="90%" />
            </View>

            <Text
              style={{
                marginTop: 30,
                fontWeight: 'bold',
                fontSize: 15,
                color: active === 'mid' ? 'white' : 'black',
              }}>
              BOOKING
            </Text>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 15,
                color: active === 'mid' ? 'white' : 'black',
              }}>
              LAPANGAN
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive('right')}
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <View
            style={{
              width: '90%',
              height: '70%',
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: active === 'right' ? 'tranparent' : 'black',
              backgroundColor: active === 'right' ? '#797FFB' : 'white',
            }}>
            <View style={{position: 'absolute', width: 90, top: -50, left: 5}}>
              <MainLocker height="90" width="90%" />
            </View>

            <Text
              style={{
                marginTop: 30,
                fontWeight: '900',
                fontSize: 15,
                color: active === 'right' ? 'white' : 'black',
              }}>
              JOIN
            </Text>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 15,
                color: active === 'right' ? 'white' : 'black',
              }}>
              TEAM
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}>
          Pilih tim <Text style={{fontWeight: '900'}}>Sparing</Text> kamu
        </Text>
        <View
          style={{
            width: 70,
            height: 30,
            borderRadius: 20,
            marginRight: 6,
            backgroundColor: '#797FFB',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
            Lihat Semua
          </Text>
        </View>
      </View>
      <View style={{height : 125}}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop : 10}} >
        <View style={{height: 100, flexDirection : "row"}}>
          <View
            style={{
              height: '100%',
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/annahl.jpg')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/awanglongfa.png')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/bogor.png')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/vamos.png')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}>
          Pilih tim <Text style={{fontWeight: '900'}}>Sparing</Text> kamu
        </Text>
        <View
          style={{
            width: 70,
            height: 30,
            borderRadius: 20,
            marginRight: 6,
            backgroundColor: '#797FFB',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
            Lihat Semua
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop : 10}} >
        <View style={{height: 150, flexDirection : "row", }}>
          <View
            style={{
              
              height: 100,
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/annahl.jpg')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/awanglongfa.png')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/bogor.png')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: 90,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              marginRight : 10,
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
              position : "relative"
            }}>
            <Image
              source={require('./asset/LOGO/vamos.png')}
              style={{width: 70, height: 70}}
            />
            <View
              style={{
                position : 'absolute',
                width: 60,
                height: 20,
                borderRadius: 20,
                marginRight: 6,
                backgroundColor: '#797FFB',
                justifyContent: 'center',
                alignItems: 'center',
                top : 90
              }}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 13}}>
                PILIH
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </ScrollView>
    </View>
  );
};

const Stadium = () => {
  return (
    <View>
      <Text>Stadium</Text>
    </View>
  );
};
const User = () => {
  return (
    <View>
      <Text>User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    minWidth: 90,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    borderRadius: 10,
    backgroundColor: 'white',
  },
  itemText: {
    fontWeight: '900',
    color: '#A519E6',
  },
  pageHome: {
    
    
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerHome: {
    width: '100%',
    height: 60,

    flexDirection: 'row',
  },
  userInfo: {
    flex: 1,

    flexDirection: 'row',
  },
  textUserInfo: {
    marginLeft: 5,
    justifyContent: 'center',
  },

  scheduleInfo: {
    flex: 2,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  scheduleText: {
    marginEnd: 10,
  },

  hero: {
    marginTop: 10,
    width: '100%',
    height: 100,
  },
});

export default App;
