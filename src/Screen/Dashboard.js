import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {FlatGrid} from 'react-native-super-grid';
import {
  addToCart,
  likeANDdislike,
  minusItem,
  plusItem,
} from '../Reducer/DateReducer/date_actions';
import RBSheet from 'react-native-raw-bottom-sheet';
const listArray = [
  {id: 1, name: 'Vegetables'},
  {id: 2, name: 'Fruits'},
  {id: 3, name: 'Dairy'},
  {id: 4, name: 'Meat'},
  {id: 5, name: 'Fruits'},
  {id: 6, name: 'Dairy'},
  {id: 7, name: 'Meat'},
];

const Dashboard = props => {
  const refRBSheet = useRef();
  const [Search, setSearch] = useState('');
  const [IsFollow, setIsFollow] = useState(false);
  const [SelectedItem, setSelectedItem] = useState({id: 2, name: 'Fruits'});
  const [SelectedSubItem, setSelectedSubItem] = useState(props.items.at(0));

  useEffect(() => {}, [SelectedSubItem, props.items]);

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#00000000" translucent />
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={{height: 371}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 60,
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                marginLeft: 20,
                height: 16,
                width: 16,
                resizeMode: 'contain',
              }}
              source={require('../assets/back_arrow.png')}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 74,
                    width: 130,
                  }}
                  source={require('../assets/harish_farm.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'white',
                    alignSelf: 'center',
                    marginTop: 18,
                  }}>
                  Harris Farm Markets
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: 'white',
                    alignSelf: 'center',
                    marginTop: 3,
                  }}>
                  Castle Hill, Sydney
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: 'white',
                    alignSelf: 'center',
                    marginTop: 13,
                    textDecorationLine: 'underline',
                  }}>
                  View Info
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsFollow(!IsFollow);
                }}
                style={{
                  backgroundColor: 'black',
                  borderRadius: 30,
                  marginLeft: 16,
                  width: 100,
                  height: 40,
                  marginRight: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 16,
                    width: 16,
                    resizeMode: 'contain',
                    marginRight: 8,
                  }}
                  source={
                    !IsFollow
                      ? require('../assets/icon_plus.png')
                      : require('../assets/icon_minus.png')
                  }
                />
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {!IsFollow ? 'Follow' : 'Unfollow'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Search Bar */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 30,
              height: 48,
              marginHorizontal: 16,
              marginTop: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 18,
                width: 18,
                resizeMode: 'contain',
                marginRight: 8,
                marginLeft: 19,
              }}
              source={require('../assets/search.png')}
            />
            <TextInput
              placeholder="Search Harris Farm Markets..."
              style={{color: 'black', fontSize: 16}}
              value={Search}
              onChangeText={txt => {
                setSearch(txt);
              }}></TextInput>
          </View>
        </ImageBackground>
        <FlatList
          style={{marginTop: 10}}
          showsHorizontalScrollIndicator={false}
          data={listArray}
          horizontal
          keyExtractor={item => item.id}
          renderItem={(item, index) => (
            <TouchableOpacity
              style={{marginLeft: item.index == 0 ? 12 : 0}}
              onPress={() => {
                setSelectedItem(item.item);
              }}>
              <LinearGradient
                colors={
                  SelectedItem.id == item.item.id
                    ? ['#43B028', '#FBCE2E']
                    : ['#fff', '#fff']
                }
                style={{
                  borderRadius: 30,
                  elevation: 5,
                  marginRight: 24,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    color: SelectedItem.id == item.item.id ? 'white' : 'black',
                    marginHorizontal: 16,
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  {item.item.name}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}></FlatList>

        {/* show selected title and filter option */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 16,
            justifyContent: 'space-between',
            marginTop: 22,
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            {SelectedItem.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 18,
                width: 18,
                resizeMode: 'contain',
                marginRight: 8,
                marginLeft: 19,
              }}
              source={require('../assets/filter.png')}
            />
            <Text style={{fontSize: 16, color: 'black'}}>Filter and sort</Text>
          </View>
        </View>
        {/* display all items */}
        <FlatGrid
          itemDimension={150}
          data={props.items}
          style={{marginTop: 10, flex: 1, backgroundColor: 'white'}}
          spacing={20}
          renderItem={({item}) => (
            <View style={{height: 250, backgroundColor: 'white', elevation: 2}}>
              <ImageBackground
                source={item.image}
                style={{height: 100, width: '100%'}}
                imageStyle={{resizeMode: 'cover'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 8,
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedSubItem(item);
                      refRBSheet.current.open();
                    }}
                    style={{
                      backgroundColor: 'white',
                      height: 44,
                      width: 44,
                      borderRadius: 44 / 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 18,
                        width: 18,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/menu_icon.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      props.likeANDdislike(item.id);
                    }}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                      }}
                      source={
                        item.isLike
                          ? require('../assets/selected_heart.png')
                          : require('../assets/heart.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <View style={{height: 37}}>
                <Text
                  style={{
                    marginHorizontal: 8,
                    fontSize: 15,
                    fontWeight: '400',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 8,
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  ${item.price}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    marginLeft: 8,
                  }}>
                  ($10.29/KG)
                </Text>
              </View>
              {item.inCart ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 8,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      props.minusItem(item.id);
                    }}
                    style={{
                      backgroundColor: '#43B028',
                      height: 48,
                      width: 48,
                      borderRadius: 48 / 2,
                      marginTop: 16,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 16,
                        width: 16,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/icon_minus.png')}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 16,
                    }}>
                    {item.count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.plusItem(item.id);
                    }}
                    style={{
                      backgroundColor: '#43B028',
                      height: 48,
                      width: 48,
                      borderRadius: 48 / 2,
                      marginTop: 16,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 16,
                        width: 16,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/icon_plus.png')}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    props.addToCart(item.id);
                  }}
                  style={{
                    backgroundColor: '#43B028',
                    borderRadius: 30,
                    height: 48,
                    marginHorizontal: 8,
                    marginTop: 16,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 16,
                      width: 16,
                      resizeMode: 'contain',
                      marginRight: 8,
                    }}
                    source={require('../assets/icon_plus.png')}
                  />
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    ADD TO CART
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
        {/* for bottom sheet  */}

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          closeOnPressBack={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: 'gray',
            },
            container: {
              borderRadius: 40,
              elevation: 10,
            },
          }}
          height={750}
          openDuration={250}>
          <View style={{backgroundColor: 'white'}}>
            <ImageBackground
              source={require('../assets/tometo.png')}
              style={{height: 256, width: '100%'}}>
              <View style={{flex: 1}}></View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  height: 45,
                  width: 45,
                  borderRadius: 45 / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 8,
                  alignSelf: 'flex-end',
                  margin: 16,
                }}
                onPress={() => {
                  props.likeANDdislike(SelectedSubItem.id);
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                  }}
                  source={
                    props.items.at(SelectedSubItem.id - 1).isLike
                      ? require('../assets/selected_heart.png')
                      : require('../assets/heart.png')
                  }
                />
              </TouchableOpacity>
            </ImageBackground>
            <View style={{marginHorizontal: 16, marginTop: 24}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: 'black',
                }}>
                Tomatoes Vine Large (min 500g)
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 16,
                }}>
                <Text
                  style={{fontWeight: '400', fontSize: 16, color: '#6D6B6B'}}>
                  Sold by:
                </Text>
                <Image
                  style={{
                    height: 29,
                    width: 52,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/small_logo.png')}
                />
                <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
                  Harris Farm Markets
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 12,
                }}>
                <Text
                  style={{fontWeight: '400', fontSize: 16, color: '#6D6B6B'}}>
                  Status:
                </Text>
                <Text
                  style={{fontWeight: '600', fontSize: 16, color: '#43B028'}}>
                  {' '}
                  In Stock
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 12,
                }}>
                <Text
                  style={{fontWeight: '400', fontSize: 16, color: '#6D6B6B'}}>
                  Categories:{'  '}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: 'black',
                    textDecorationLine: 'underline',
                  }}>
                  {SelectedItem.name}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 12,
                  marginLeft: 5,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
                  ${SelectedSubItem.price}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'black',
                  }}>
                  {' '}
                  /item
                </Text>
              </View>
              <View
                style={{
                  marginTop: 40,
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                      color: 'black',
                    }}>
                    Information
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: 3,
                      marginTop: 8,
                    }}></View>
                </View>
                <View style={{flex: 1}}></View>
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#6D6B6B',
                  marginTop: 17,
                }}>
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 6,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: '#0B0909',
                    }}>
                    2 items
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#0B0909',
                      marginTop: 4,
                    }}>
                    $100.00
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.addToCart(item.id);
                  }}
                  style={{
                    backgroundColor: '#43B028',
                    borderRadius: 30,
                    height: 48,
                    width: 191,
                    marginHorizontal: 8,
                    marginTop: 16,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    GO TO CART
                  </Text>
                  <Image
                    style={{
                      height: 16,
                      width: 16,
                      resizeMode: 'contain',
                      marginLeft: 12,
                    }}
                    source={require('../assets/right_arrow.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  items: state.dateDetails.items,
});

const mapDispatchToProps = {
  likeANDdislike,
  addToCart,
  plusItem,
  minusItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
