import * as Notifications from 'expo-notifications';
import { formatScheduleNotification } from './scheduleData';

// Hủy tất cả notification đã lên lịch
export const cancelAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log('🗑️ Đã hủy tất cả notification đã lên lịch');
};

// Lên lịch notification hàng ngày lúc 5h sáng
export const scheduleDailyNotification = async () => {
  try {
    // Hủy notification cũ trước
    await cancelAllScheduledNotifications();
    
    // Lên lịch notification lặp lại hàng ngày lúc 5h sáng
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: '📚 Lịch học hôm nay',
        body: 'Đang tải lịch học...',
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        hour: 5,
        minute: 0,
        repeats: true,
      },
    });
    
    console.log('✅ Đã lên lịch notification hàng ngày lúc 5h sáng');
    console.log('📋 Notification ID:', notificationId);
    
    return notificationId;
  } catch (error) {
    console.error('❌ Lỗi lên lịch notification:', error);
    return null;
  }
};

// Gửi notification ngay lập tức (để test)
export const sendTestNotification = async () => {
  try {
    const notification = formatScheduleNotification();
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: notification.title,
        body: notification.body,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: null, // Gửi ngay lập tức
    });
    
    console.log('✅ Đã gửi test notification');
  } catch (error) {
    console.error('❌ Lỗi gửi test notification:', error);
  }
};

// Lấy danh sách notification đã lên lịch
export const getScheduledNotifications = async () => {
  const notifications = await Notifications.getAllScheduledNotificationsAsync();
  console.log('📋 Danh sách notification đã lên lịch:', notifications);
  return notifications;
};

// Setup notification listener để cập nhật nội dung động
export const setupNotificationListener = () => {
  // Listener này sẽ chạy khi notification sắp hiển thị
  const subscription = Notifications.addNotificationReceivedListener(notification => {
    // Cập nhật nội dung notification với lịch học thực tế
    const scheduleInfo = formatScheduleNotification();
    
    // Log để debug
    console.log('📩 Notification nhận được:', notification);
    console.log('📚 Lịch học hôm nay:', scheduleInfo);
  });
  
  return subscription;
};
