import React, { useState, useRef, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  ActivityIndicator, 
  RefreshControl,
  Platform,
  Alert,
  BackHandler,
  TouchableOpacity,
  Text
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreenComponent from './components/SplashScreen';
import { scheduleDailyNotification, sendTestNotification } from './utils/notificationScheduler';
import { formatScheduleNotification } from './utils/scheduleData';

// HTML thời khóa biểu nhúng trực tiếp
const SCHEDULE_HTML = `
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Thời Khóa Biểu - ITC CD25CT4</title>
<style>
* {margin: 0;padding: 0;box-sizing: border-box;}
body {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;background-color: #f8f9fa;color: #333;line-height: 1.5;padding: 10px;}
.container {max-width: 1400px;margin: 0 auto;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);overflow: hidden;}
.header {background: #2c3e50;color: white;padding: 20px;text-align: center;}
h1 {font-size: 22px;font-weight: 600;margin-bottom: 8px;}
.subtitle {font-size: 15px;opacity: 0.9;font-weight: normal;}
.content {padding: 16px;}
.semester-section {margin-bottom: 30px;}
.semester-title {font-size: 18px;font-weight: 600;color: #2c3e50;padding: 14px;background: #e9ecef;border-left: 4px solid #2c3e50;margin-bottom: 16px;border-radius: 4px;}
.info-bar {display: flex;gap: 16px;margin-bottom: 20px;padding: 14px;background: #f8f9fa;border-radius: 6px;border-left: 4px solid #2c3e50;}
.info-item {text-align: center;flex: 1;}
.info-number {font-size: 20px;font-weight: 600;color: #2c3e50;display: block;}
.info-label {font-size: 12px;color: #6c757d;margin-top: 2px;}
.table-container {border: 1px solid #dee2e6;border-radius: 6px;overflow: hidden;margin-bottom: 20px;}
.table-wrapper {overflow-x: auto;-webkit-overflow-scrolling: touch;}
table {width: 100%;border-collapse: collapse;font-size: 13px;}
th {background: #f8f9fa;color: #495057;font-weight: 600;text-align: center;padding: 10px 6px;border-bottom: 2px solid #dee2e6;border-right: 1px solid #dee2e6;white-space: nowrap;}
th:last-child {border-right: none;}
td {padding: 10px 6px;border-bottom: 1px solid #e9ecef;border-right: 1px solid #e9ecef;vertical-align: top;}
td:last-child {border-right: none;}
tr:nth-child(even) {background: #fafbfc;}
.row-number {text-align: center;font-weight: 600;color: #495057;width: 40px;background: #e9ecef;}
.course-name {font-weight: 500;color: #212529;min-width: 140px;}
.instructor {color: #495057;min-width: 80px;}
.day {text-align: center;font-weight: 500;color: #495057;min-width: 50px;}
.session {text-align: center;font-weight: 500;min-width: 50px;}
.session-morning {color: #28a745;}
.session-afternoon {color: #fd7e14;}
.session-evening {color: #6610f2;}
.date {text-align: center;font-family: 'Courier New', monospace;color: #6c757d;min-width: 85px;font-size: 12px;}
.weeks, .periods {text-align: center;font-weight: 600;color: #6f42c1;min-width: 45px;background: #f8f6ff;border-radius: 4px;font-size: 13px;}
.room {text-align: center;font-weight: 600;color: #0d6efd;min-width: 65px;background: #f0f8ff;border-radius: 4px;font-size: 13px;box-shadow: 0 1px 3px rgba(13, 110, 253, 0.1);}
.room::before {content: "📍 ";font-size: 11px;}
.footer {text-align: center;padding: 16px;background: #f8f9fa;color: #6c757d;font-size: 13px;border-top: 1px solid #dee2e6;}
@media (max-width: 768px) {
body {padding: 5px;}
.content {padding: 12px;}
.info-bar {flex-direction: row;gap: 10px;}
table {font-size: 11px;}
th, td {padding: 6px 4px;}
h1 {font-size: 20px;}
.subtitle {font-size: 14px;}
}
</style>
</head>
<body>
<div class="container">
<div class="header">
<h1>THỜI KHÓA BIỂU</h1>
<div class="subtitle">Công nghệ Thông tin - Lớp CD25CT4</div>
</div>
<div class="content">
<div class="semester-section">
<div class="semester-title">📚 HỌC KỲ 2 - NĂM HỌC 2025-2026</div>
<div class="info-bar">
<div class="info-item">
<span class="info-number">5</span>
<div class="info-label">Học phần</div>
</div>
<div class="info-item">
<span class="info-number">6</span>
<div class="info-label">Giảng viên</div>
</div>
<div class="info-item">
<span class="info-number">8</span>
<div class="info-label">Buổi học</div>
</div>
</div>
<div class="table-container">
<div class="table-wrapper">
<table>
<thead>
<tr>
<th>STT</th>
<th>Tên học phần</th>
<th>Tên GV</th>
<th>Họ GV</th>
<th>Thứ</th>
<th>Ca</th>
<th>Ngày bắt đầu</th>
<th>Ngày kết thúc</th>
<th>Tuần</th>
<th>Giờ học</th>
<th>Phòng học</th>
</tr>
</thead>
<tbody>
<tr>
<td class="row-number">1</td>
<td class="course-name">Lập trình hướng đối tượng</td>
<td class="instructor">Nguyễn Trung</td>
<td class="instructor">Kiên</td>
<td class="day">Hai</td>
<td class="session session-afternoon">Chiều</td>
<td class="date">01-12-2025</td>
<td class="date">09-03-2026</td>
<td class="weeks">7</td>
<td class="periods">13h00 - 17h00</td>
<td class="room">A.308</td>
</tr>
<tr>
<td class="row-number"></td>
<td class="course-name">Lập trình PHP 1</td>
<td class="instructor">Huynh</td>
<td class="instructor">Luân</td>
<td class="day">Hai</td>
<td class="session session-evening">Tối</td>
<td class="date">15-12-2025</td>
<td class="date">27-04-2026</td>
<td class="weeks">13</td>
<td class="periods">18h00 - 21h00</td>
<td class="room">B.103</td>
</tr>
<tr>
<td class="row-number">2</td>
<td class="course-name">Tiếng Anh 1</td>
<td class="instructor">Huynh</td>
<td class="instructor">Thuỷ</td>
<td class="day">Ba</td>
<td class="session session-morning">Sáng</td>
<td class="date">02-12-2025</td>
<td class="date">03-02-2026</td>
<td class="weeks">4</td>
<td class="periods">8h30 - 11h45</td>
<td class="room">A.304</td>
</tr>
<tr>
<td class="row-number"></td>
<td class="course-name">Tiếng Anh 1</td>
<td class="instructor">Huynh</td>
<td class="instructor">Thuỷ</td>
<td class="day">Tư</td>
<td class="session session-morning">Sáng</td>
<td class="date">03-12-2025</td>
<td class="date">04-02-2026</td>
<td class="weeks">4</td>
<td class="periods">8h30 - 11h45</td>
<td class="room">A.304</td>
</tr>
<tr>
<td class="row-number">3</td>
<td class="course-name">Thiết kế web 1</td>
<td class="instructor">Đông Vân</td>
<td class="instructor">Lưu</td>
<td class="day">Năm</td>
<td class="session session-morning">Sáng</td>
<td class="date">04-12-2025</td>
<td class="date">12-03-2026</td>
<td class="weeks">1</td>
<td class="periods">7h00 - 11h00</td>
<td class="room">B.402</td>
</tr>
<tr>
<td class="row-number"></td>
<td class="course-name">Thiết kế đồ họa</td>
<td class="instructor">Võ Thị Yến</td>
<td class="instructor">Quỳnh</td>
<td class="day">Năm</td>
<td class="session session-afternoon">Chiều</td>
<td class="date">04-12-2025</td>
<td class="date">19-03-2026</td>
<td class="weeks">7</td>
<td class="periods">13h00 - 17h00</td>
<td class="room">B.404</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<div class="footer">
Thời Khóa Biểu - Công nghệ Thông tin - Lớp CD25CT4<br>
Năm học 2025-2026
</div>
</div>
</body>
</html>
`;

// Cấu hình notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  
  const webViewRef = useRef(null);

  // Setup push notification
  useEffect(() => {
    const setupNotifications = async () => {
      // Đăng ký push notification
      await registerForPushNotificationsAsync();
      
      // Lên lịch notification hàng ngày lúc 5h sáng
      await scheduleDailyNotification();
      
      console.log('✅ Đã setup notification tự động lúc 5h sáng mỗi ngày');
    };
    
    setupNotifications();
    
    // Lắng nghe notification khi app đang mở
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('📩 Nhận notification:', notification);
      
      // Lấy lịch học hôm nay và hiển thị
      const scheduleInfo = formatScheduleNotification();
      Alert.alert(
        scheduleInfo.title,
        scheduleInfo.body
      );
    });

    // Lắng nghe khi user tap vào notification
    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('👆 User tap notification:', response);
      
      // Hiển thị lịch học khi tap vào notification
      const scheduleInfo = formatScheduleNotification();
      Alert.alert(
        scheduleInfo.title,
        scheduleInfo.body
      );
    });

    // Ẩn splash screen sau 2 giây
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  // Đăng ký push notification
  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#2c3e50',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      if (finalStatus !== 'granted') {
        Alert.alert('Lỗi', 'Không thể lấy quyền thông báo!');
        return;
      }
      
      token = (await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      })).data;
      
      console.log('🔑 Expo Push Token:', token);
      
      // Lưu token vào AsyncStorage
      await AsyncStorage.setItem('expoPushToken', token);
      
      // TODO: Gửi token lên server của bạn
      // await sendTokenToServer(token);
      
    } else {
      Alert.alert('Lưu ý', 'Push notification chỉ hoạt động trên thiết bị thật');
    }

    return token;
  }

  // Xử lý refresh
  const handleRefresh = () => {
    setRefreshing(true);
    webViewRef.current?.reload();
    setTimeout(() => setRefreshing(false), 500);
  };

  if (showSplash) {
    return <SplashScreenComponent />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <WebView
        ref={webViewRef}
        source={{ html: SCHEDULE_HTML }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        bounces={true}
        scrollEnabled={true}
      />
      
      {/* Nút test notification - Luôn hiển thị */}
      <View style={styles.testButtonContainer}>
        <TouchableOpacity 
          style={styles.testButton}
          onPress={async () => {
            await sendTestNotification();
            Alert.alert('✅ Thành công', 'Đã gửi notification! Kiểm tra thanh thông báo.');
          }}
        >
          <Text style={styles.testButtonIcon}>🔔</Text>
          <Text style={styles.testButtonText}>Test Thông Báo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  testButtonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  testButton: {
    backgroundColor: '#2c3e50',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  testButtonIcon: {
    fontSize: 20,
  },
  testButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
