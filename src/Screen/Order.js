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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const Order = props => {
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
    <ScrollView style={{flex: 1, backgroundColor: 'white', height: '100%'}}>
      <SafeAreaView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 55,
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image
              style={{
                height: 16,
                width: 16,
                resizeMode: 'contain',
              }}
              source={require('../assets/back_arrow.png')}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
            Order {new Date().toLocaleString()}
          </Text>
          <Text></Text>
        </View>
        <View style={{marginHorizontal: 16}}>
          <ImageBackground
            style={{
              height: 130,
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{resizeMode: 'contain', alignSelf: 'center'}}
            source={require('../assets/thanks_for_order.png')}>
            <Text style={{fontWeight: '700', color: '#FFFFFF', fontSize: 24}}>
              Thanks for your order!
            </Text>
          </ImageBackground>
          <Text
            style={{
              fontWeight: '400',
              color: '#6D6B6B',
              fontSize: 16,
              marginTop: 17,
            }}>
            Receipt №345271
          </Text>
          <Text
            style={{
              fontWeight: '600',
              color: '#0B0909',
              fontSize: 18,
              marginTop: 23,
            }}>
            Order summary
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Items
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              {
                props.items.filter(i => {
                  return i.inCart == true;
                }).length
              }
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Order placed
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              {new Date().toLocaleString()}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Order delivered
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              {new Date().toLocaleString()}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '600',
              color: '#0B0909',
              fontSize: 18,
              marginTop: 24,
            }}>
            Billing info
          </Text>
          <Text
            style={{
              fontWeight: '400',
              color: '#6D6B6B',
              fontSize: 16,
              marginTop: 16,
            }}>
            1226 Univercity Road, 45
          </Text>
          <Text
            style={{
              fontWeight: '600',
              color: '#0B0909',
              fontSize: 18,
              marginTop: 24,
            }}>
            Order summary
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              ${total}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Tax
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              $0.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Delivery fee
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              $1.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
              }}>
              Discount
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#0B0909',
                fontSize: 16,
              }}>
              -$2.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000',
                fontSize: 24,
              }}>
              Total
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#0B0909',
                fontSize: 24,
              }}>
              ${total - 1}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '600',
              color: '#0B0909',
              fontSize: 18,
              marginTop: 24,
            }}>
            Payment method
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 14,
            }}>
            <Image
              style={{
                height: 37,
                width: 56,
                resizeMode: 'contain',
              }}
              source={require('../assets/visa.png')}
            />
            <Text
              style={{
                fontWeight: '400',
                color: '#6D6B6B',
                fontSize: 16,
                marginLeft: 6,
              }}>
              .... 4587
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 24,
              marginBottom: 40,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.replace('Dashboard');
              }}
              style={{
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#0B0909',
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 4,
                flex: 1,
              }}>
              <Image
                style={{
                  height: 18,
                  width: 18,
                  resizeMode: 'contain',
                }}
                source={require('../assets/back_arrow.png')}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#000',
                  fontSize: 14,
                  marginLeft: 6,
                }}>
                BACK TO SHOPS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#43B028',
                height: 56,
                flex: 1,
                justifyContent: 'center',
                marginLeft: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#43B028',
                  fontSize: 14,
                }}>
                TRACK ORDERS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  items: state.dateDetails.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
