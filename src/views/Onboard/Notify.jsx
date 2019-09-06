class Notify {
  // for success alert
  successNotification = (message, title) => {
    this.notifier.showNotification({
      message: message,
      level: "success",
      title: title,
      id: "mynotification"
    });
  };

  // for error message
  errorNotification = (message, title) => {
    this.notifier.showNotification({
      message: message,
      level: "error",
      title: title,
      id: "mynotification"
    });
  };

  // for error message
  warningNotification = (message, title) => {
    this.notifier.showNotification({
      message: message,
      level: "warning",
      title: title,
      id: "mynotification"
    });
  };

  addNotification = () =>
    this.notifier.showNotification({
      message: "New Notification",
      level: "info",
      title: "New Notification Title"
    });

  removeMyNotification = () =>
    this.notifier.removeNotificationById("mynotification");

  notifier = notifier => (this.notifier = notifier);
  notifier;
}

export default Notify;
