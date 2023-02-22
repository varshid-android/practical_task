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
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  addToCart,
  clearCart,
  likeANDdislike,
  minusItem,
  plusItem,
} from '../Reducer/DateReducer/date_actions';
const Cart = props => {
  const [IsCart, setIsCart] = useState(true);
  const [total, seTotal] = useState(0);

  useEffect(() => {
    seTotal(
      props.items
        .filter(i => {
          return i.inCart == true;
        })
        .reduce(
          (total, currentItem) =>
            (total = total + currentItem.price * currentItem.count),
          0,
        )
        .toFixed(2),
    );
  }, [props.items, total]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', height: '100%'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent />
      <View style={{elevation: 10}}>
        <Image
          style={{
            marginLeft: 20,
            height: 16,
            width: 16,
            marginTop: 55,
            resizeMode: 'contain',
          }}
          source={require('../assets/simple_menu.png')}
        />
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsCart(true);
            }}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: IsCart ? 'black' : '#6D6B6B',
                fontWeight: '600',
              }}>
              Cart
            </Text>
            <View
              style={{
                backgroundColor: IsCart ? 'black' : '#00000000',
                height: 3,
                marginTop: 8,
                width: '100%',
              }}></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsCart(false);
            }}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: !IsCart ? 'black' : '#6D6B6B',
                fontWeight: '600',
              }}>
              Past Orders
            </Text>
            <View
              style={{
                backgroundColor: !IsCart ? 'black' : '#00000000',
                height: 3,
                marginTop: 8,
                width: '100%',
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
      {/* for show My Cart and clear All */}
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 24,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          My cart
        </Text>
        <Text
          onPress={() => {
            props.clearCart();
          }}
          style={{
            color: '#43B028',
            fontWeight: '400',
            fontSize: 16,
          }}>
          Clear All
        </Text>
      </View>

      {/* For show all cart items */}
      <FlatList
        style={{marginTop: 38}}
        extraData={total}
        data={props.items.filter(i => {
          return i.inCart == true;
        })}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          props.items.filter(i => {
            return i.inCart == true;
          }).length == 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Cart is Empty Please add items in cart</Text>
            </View>
          ) : (
            <View>
              <View
                style={{
                  marginHorizontal: 16,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/h_farm.png')}
                />
                <View style={{marginLeft: 8, flex: 1}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Harris Farm Markets
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#0B0909',
                        fontWeight: '300',
                        fontSize: 12,
                        flex: 1,
                      }}>
                      Delivery fee: $1.00
                    </Text>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      ${total}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginLeft: 16,
                  marginTop: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>ADD </Text>
                <Text style={{color: '#43B028'}}>$14.50</Text>
                <Text style={{color: 'black'}}> for free delivery</Text>
              </View>
            </View>
          )
        }
        renderItem={(item, index) => (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 16,
              borderTopColor: '#F2F2F2',
              borderTopWidth: 2,
              marginVertical: 10,
              marginTop: item.index == 0 ? 25 : 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  height: 56,
                  width: 56,
                  resizeMode: 'contain',
                }}
                source={item.item.image}
              />
              <View style={{marginLeft: 8}}>
                <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                  ${item.item.price}
                </Text>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>
                  {item.item.name}
                </Text>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>
                  Pick Value Range, 500g
                </Text>
                <View
                  style={{
                    marginTop: 11,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      height: 18,
                      width: 18,
                      resizeMode: 'contain',
                      marginRight: 11,
                    }}
                    source={require('../assets/pancil.png')}
                  />
                  <Text
                    style={{
                      color: '#6D6B6B',
                      fontSize: 14,
                      fontWeight: '400',
                    }}>
                    Preferences
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  props.minusItem(item.item.id);
                }}
                style={{
                  backgroundColor: '#43B028',
                  height: 32,
                  width: 32,
                  borderRadius: 32 / 2,
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
                  marginHorizontal: 20,
                }}>
                {item.item.count}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.plusItem(item.item.id);
                }}
                style={{
                  backgroundColor: '#43B028',
                  height: 32,
                  width: 32,
                  borderRadius: 32 / 2,
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
          </View>
        )}></FlatList>

      <View
        style={{
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginBottom: 30,
        }}>
        <View>
          <Text style={{color: '#0B0909', fontWeight: '400', fontSize: 14}}>
            {
              props.items.filter(i => {
                return i.inCart == true;
              }).length
            }{' '}
            items
          </Text>
          <Text
            style={{
              color: '#0B0909',
              fontWeight: '600',
              fontSize: 18,
              marginTop: 4,
            }}>
            $ {total}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.items.filter(i => {
              return i.inCart == true;
            }).length == 0
              ? ToastAndroid.show(
                  'Cart is Empty Please add items first',
                  ToastAndroid.LONG,
                )
              : props.navigation.navigate('Order');
          }}
          style={{
            backgroundColor: '#43B028',
            borderRadius: 30,
            height: 48,
            width: 200,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>CONFIRM</Text>
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
    </SafeAreaView>
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
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
