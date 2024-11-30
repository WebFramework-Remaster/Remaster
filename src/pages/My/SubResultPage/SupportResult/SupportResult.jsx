import React, { useState } from "react";
import "./SupportResult.css";
import CancelConfirmModal from "../../../../components/CancelConfirm/CancelConfirmModal";
import "../pagenation.css";

const SupportResult = ({ currentUser }) => {
  const getCombinedSupport = () => {
    if (!currentUser) return [];
    return [
      ...currentUser.l_support.map((item) => ({
        ...item,
        category: "생활지원",
      })),
      ...currentUser.t_support.map((item) => ({
        ...item,
        category: "이동지원",
      })),
    ];
  };

  const [combinedSupport, setCombinedSupport] = useState(getCombinedSupport);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSupportIndex, setSelectedSupportIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null); // 확장된 항목 관리

  const openModal = (index) => {
    setSelectedSupportIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSupportIndex(null);
  };

  const handleConfirmCancel = () => {
    const selectedSupport = combinedSupport[selectedSupportIndex];
    if (selectedSupport.category === "생활지원") {
      currentUser.l_support = currentUser.l_support.filter(
        (item) => item !== selectedSupport
      );
    } else if (selectedSupport.category === "이동지원") {
      currentUser.t_support = currentUser.t_support.filter(
        (item) => item !== selectedSupport
      );
    }
    const updatedCombinedSupport = [
      ...currentUser.l_support.map((item) => ({
        ...item,
        category: "생활지원",
      })),
      ...currentUser.t_support.map((item) => ({
        ...item,
        category: "이동지원",
      })),
    ];
    setCombinedSupport(updatedCombinedSupport);
    closeModal();
  };

  const isPastDate = (date) => {
    const supportDate = new Date(date);
    const today = new Date();
    return supportDate < today;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = combinedSupport.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(combinedSupport.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="supportresult-container">
      <div className="support-list-section">
        <div className="support-list-header">
          <div className="purpose">목적</div>
          <div className="category">카테고리</div>
          <div className="date">날짜</div>
          <div className="status">상태</div>
          <div className="details">상세조회</div>
        </div>

        {currentItems.length === 0 ? (
          <div className="no-support-message">신청된 지원이 없습니다.</div>
        ) : (
          currentItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="support-item">
                <div className="purpose">
                  {item.purpose || item.destination}
                </div>
                <div className="category">{item.category}</div>
                <div className="date">{item.date || item.start_date}</div>
                <div className="status">
                  {isPastDate(item.date || item.start_date) ? (
                    <button className="cancel-button disabled" disabled>
                      취소 불가
                    </button>
                  ) : (
                    <button
                      className="cancel-button"
                      onClick={() =>
                        openModal(index + (currentPage - 1) * itemsPerPage)
                      }
                    >
                      취소
                    </button>
                  )}
                </div>
                <div className="details">
                  <button
                    className="details-button"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "접기" : "보기"}
                  </button>
                </div>
              </div>

              {expandedIndex === index && (
                <div className="support-details">
                  <p>
                    <strong>출발지:</strong>{" "}
                    {item.departure_location || "정보 없음"}
                  </p>
                  <p>
                    <strong>목적지:</strong> {item.destination || "정보 없음"}
                  </p>
                  <p>
                    <strong>수화 사용 여부:</strong>{" "}
                    {item.need_sign_language ? "예" : "아니오"}
                  </p>
                  <p>
                    <strong>휠체어 사용 여부:</strong>{" "}
                    {item.need_bathchair ? "예" : "아니오"}
                  </p>
                  <p>
                    <strong>복귀 여부:</strong>{" "}
                    {item.need_for_return ? "예" : "아니오"}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
          >
            이전
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`pagination-item ${
                currentPage === i + 1 ? "active" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`pagination-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            다음
          </button>
        </div>
      )}

      <CancelConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmCancel}
      />
    </div>
  );
};

export default SupportResult;
