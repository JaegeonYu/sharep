package com.sharep.be.modules.common.service.port;

import org.springframework.web.multipart.MultipartFile;

public interface S3Repository {

    String saveFile(MultipartFile multipartFile);
    void deleteFile(String fileUrl);

    String extractStoredFilePathFromUrl(String fileUrl);
}
