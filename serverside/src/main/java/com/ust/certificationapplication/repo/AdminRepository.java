package com.ust.certificationapplication.repo;
import com.ust.certificationapplication.Model.AdminRecord;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;
public interface AdminRepository extends CrudRepository<AdminRecord, String> {
    Optional<AdminRecord> findByusername(String username);
}