// Dữ liệu thời khóa biểu
export const scheduleData = [
  {
    id: 1,
    courseName: 'Lập trình hướng đối tượng',
    instructor: 'Nguyễn Trung Kiên',
    day: 'Hai', // Thứ 2
    dayNumber: 2,
    session: 'Chiều',
    startDate: '2025-12-01',
    endDate: '2026-03-09',
    weeks: 7,
    time: '13h00 - 17h00',
    room: 'A.308'
  },
  {
    id: 2,
    courseName: 'Lập trình PHP 1',
    instructor: 'Huynh Luân',
    day: 'Hai', // Thứ 2
    dayNumber: 2,
    session: 'Tối',
    startDate: '2025-12-15',
    endDate: '2026-04-27',
    weeks: 13,
    time: '18h00 - 21h00',
    room: 'B.103'
  },
  {
    id: 3,
    courseName: 'Tiếng Anh 1',
    instructor: 'Huynh Thuỷ',
    day: 'Ba', // Thứ 3
    dayNumber: 3,
    session: 'Sáng',
    startDate: '2025-12-02',
    endDate: '2026-02-03',
    weeks: 4,
    time: '8h30 - 11h45',
    room: 'A.304'
  },
  {
    id: 4,
    courseName: 'Tiếng Anh 1',
    instructor: 'Huynh Thuỷ',
    day: 'Tư', // Thứ 4
    dayNumber: 4,
    session: 'Sáng',
    startDate: '2025-12-03',
    endDate: '2026-02-04',
    weeks: 4,
    time: '8h30 - 11h45',
    room: 'A.304'
  },
  {
    id: 5,
    courseName: 'Thiết kế web 1',
    instructor: 'Đông Vân Lưu',
    day: 'Năm', // Thứ 5
    dayNumber: 5,
    session: 'Sáng',
    startDate: '2025-12-04',
    endDate: '2026-03-12',
    weeks: 1,
    time: '7h00 - 11h00',
    room: 'B.402'
  },
  {
    id: 6,
    courseName: 'Thiết kế đồ họa',
    instructor: 'Võ Thị Yến Quỳnh',
    day: 'Năm', // Thứ 5
    dayNumber: 5,
    session: 'Chiều',
    startDate: '2025-12-04',
    endDate: '2026-03-19',
    weeks: 7,
    time: '13h00 - 17h00',
    room: 'B.404'
  }
];

// Lấy lịch học theo ngày trong tuần
export const getScheduleByDay = (dayNumber) => {
  return scheduleData.filter(item => item.dayNumber === dayNumber);
};

// Lấy tên thứ tiếng Việt
export const getDayName = (dayNumber) => {
  const days = {
    1: 'Chủ nhật',
    2: 'Thứ hai',
    3: 'Thứ ba',
    4: 'Thứ tư',
    5: 'Thứ năm',
    6: 'Thứ sáu',
    7: 'Thứ bảy'
  };
  return days[dayNumber] || '';
};

// Kiểm tra ngày có trong khoảng học không
export const isDateInRange = (dateStr, startDate, endDate) => {
  const date = new Date(dateStr);
  const start = new Date(startDate);
  const end = new Date(endDate);
  return date >= start && date <= end;
};

// Lấy lịch học hôm nay
export const getTodaySchedule = () => {
  const today = new Date();
  const dayNumber = today.getDay() === 0 ? 1 : today.getDay() + 1; // Chuyển đổi: 0=CN->1, 1=T2->2, ...
  const todayStr = today.toISOString().split('T')[0];
  
  const todayClasses = scheduleData.filter(item => {
    return item.dayNumber === dayNumber && 
           isDateInRange(todayStr, item.startDate, item.endDate);
  });
  
  return {
    dayNumber,
    dayName: getDayName(dayNumber),
    classes: todayClasses
  };
};

// Format thông báo
export const formatScheduleNotification = () => {
  const schedule = getTodaySchedule();
  
  if (schedule.classes.length === 0) {
    return {
      title: `📚 ${schedule.dayName}`,
      body: 'Hôm nay bạn không có lịch học. Nghỉ ngơi thôi! 😊'
    };
  }
  
  const classList = schedule.classes.map((item, index) => {
    return `${index + 1}. ${item.courseName} - ${item.session} (${item.time}) - Phòng ${item.room}`;
  }).join('\n');
  
  return {
    title: `📚 Lịch học ${schedule.dayName}`,
    body: `Hôm nay bạn có ${schedule.classes.length} môn học:\n\n${classList}`
  };
};
