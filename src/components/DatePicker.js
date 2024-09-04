import { useState } from 'react';
import useDatePickerStore from '../store/useDatePickerStore';

// Helper function to format date
const formatDate = (date) => {
  if (!date) return 'Not set';
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};

const DatePicker = () => {
  const {
    startDate,
    endDate,
    recurrence,
    customRecurrence,
    setStartDate,
    setEndDate,
    setRecurrence,
    setCustomRecurrence,
  } = useDatePickerStore();

  const [selectedRecurrence, setSelectedRecurrence] = useState('none');
  
  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().split('T')[0];

  const handleRecurrenceChange = (e) => {
    setSelectedRecurrence(e.target.value);
    setRecurrence(e.target.value);

    // Clear custom recurrence if "none" is selected
    if (e.target.value === 'none') {
      setCustomRecurrence({});
    }
  };

  const handleCustomRecurrenceChange = (e) => {
    const { name, value } = e.target;
    setCustomRecurrence({ ...customRecurrence, [name]: value });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-green-400 rounded-lg shadow-md w-full">
      <div className="mb-4">
        <label className="block text-gray-700">Start Date:</label>
        <input
          type="date"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={startDate || ''}
          min={today}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">End Date (Optional):</label>
        <input
          type="date"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Recurrence:</label>
        <select
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={selectedRecurrence}
          onChange={handleRecurrenceChange}
        >
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {selectedRecurrence !== 'none' && (
        <div className="mb-4">
          <label className="block text-gray-700">Custom Recurrence:</label>
          <input
            type="number"
            name="interval"
            placeholder="Every X days/weeks/months"
            min="1"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            onChange={handleCustomRecurrenceChange}
          />
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-gray-700">Recurrence Summary:</h4>
        <div className="mt-2">
          <span>Start Date: {formatDate(startDate)}</span>
          <br />
          <span>End Date: {formatDate(endDate)}</span>
          <br />
          <span>Recurrence: {recurrence}</span>
          <br />
          {recurrence !== 'none' && Object.keys(customRecurrence).length > 0 && (
            <span>Custom: {JSON.stringify(customRecurrence)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
