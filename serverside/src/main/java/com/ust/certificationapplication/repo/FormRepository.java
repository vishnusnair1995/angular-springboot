package com.ust.certificationapplication.repo;
import com.ust.certificationapplication.Model.FileModel;
import com.ust.certificationapplication.Model.UserModel;
//import com.ust.certificationapplication.Model.UserRecord;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface FormRepository extends CrudRepository<UserModel, String>{
    @Query(value="select efxid   FROM user_model t where t.efxid= :efxid ", nativeQuery = true)
    String findByefxid(String efxid);

    @Query(value="select count(*)   FROM file_table t where t.efxid= :id ", nativeQuery = true)
    int countRecords(@Param("id") String id);

    @Query(value="select count(*)   FROM file_table t where t.efxid= :efxid ", nativeQuery = true)
    int countRecord(@Param("efxid") String efxid);

    @Transactional
    @Modifying
  @Query(value="update user_model t set t.record=:no where t.efxid= :id ", nativeQuery = true)
//  int updateTable(@Param("no") int no,@Param("id") String id);
  void updateTable( int no, String id);

    @Query(value="select *  FROM user_model", nativeQuery = true)
    List<UserModel> fetchRecords();

}
